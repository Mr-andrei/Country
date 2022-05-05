import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store/store";
import {RepositoriesType, UserDataType} from "../../services/API/getUserDataAPI";
import style from "./repositories.module.css"
import {Pagination} from "../Hallpers/pagination/Pagination";
import {getRepoByNameTC} from "../../store/getDataByName/getDataByNameThuncCreator";
import {setCurrentPageAC} from "../../store/getDataByName/getDataByNameAC";
import {HelpersForRepo} from "../Hallpers/ScrenHallpersComponents/HelpersForRepo";
import React from "react";

export const RepoBlock = React.memo(() => {
    const dispatch = useDispatch()
    const userData = useSelector<AppRootStateType, UserDataType>(state => state.userData.userData)
    const userRepositories = useSelector<AppRootStateType, RepositoriesType[]>(state => state.userData.userRepo)
    const currentPage = useSelector<AppRootStateType, number>(state => state.userData.currentPage)


    const setCurrentPage = (page: number) => {
        dispatch(setCurrentPageAC(page))
        dispatch(getRepoByNameTC(page))
    }
    if (userRepositories.length === 0) return <><HelpersForRepo/></>

    return (
        <div className={style.wrapper_repo}>
            <h3 className={style.repo_title}>Repositories ({userData.public_repos})</h3>
            <div className={style.container}>
                {
                    userRepositories.map((m) => (
                        <div className={style.repo_block} key={m.id}>
                            <a
                               className={style.repo_link}
                               href={m.html_url}>{m.name}</a>
                            <span className={style.repo_text}>{m.description}</span>
                        </div>
                    ))
                }
            </div>

            <Pagination
                currentPage={currentPage}
                totalCountPage={userData.public_repos}
                pageCount={5}
                setPage={setCurrentPage}

            />
        </div>
    )
})