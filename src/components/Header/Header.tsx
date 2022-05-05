import {ChangeEvent, KeyboardEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDataByNameTC, getRepoByNameTC} from "../../store/getDataByName/getDataByNameThuncCreator";
import style from "./header.module.css"
import gitPhoto from "../../assets/Vector (1).png"
import search from "../../assets/searchInput.svg"
import {setCurrentPageAC, setUserNameAC} from "../../store/getDataByName/getDataByNameAC";
import {AppRootStateType} from "../../store/store/store";
import {Loader} from "../Hallpers/loader/Loader";


export const Header = () => {

    const dispatch = useDispatch()
    const [inputState, setInputState] = useState('')

    const loader = useSelector<AppRootStateType, boolean>(state => state.appData.statusLoader)

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputState(e.currentTarget.value)
        dispatch(setUserNameAC(e.currentTarget.value))

    }
    const clickHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            dispatch(getDataByNameTC())
            dispatch(getRepoByNameTC(1))
            dispatch(setCurrentPageAC(1))
            setInputState("")
        }
    }

    return (
        <header className={style.main_container}>
            <div className={style.git_image}>
                <img src={gitPhoto} alt=""/>
            </div>
            <div className={style.input_block}>
                <div className={style.input_image}>
                    <img src={search} alt=""/>
                </div>
                <input
                    className={style.input}
                    value={inputState}
                    onChange={inputChangeHandler}
                    onKeyPress={clickHandler}
                    type="text"
                    placeholder={"Search"}
                />
            </div>
            {loader && <Loader/>}
        </header>
    )
}