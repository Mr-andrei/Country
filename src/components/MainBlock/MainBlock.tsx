import {UsersBlock} from "../UsersBlock/UsersBlock";
import {RepoBlock} from "../RepositoriesBlock/RepoBlock";
import React from "react";
import style from "./mainBlock.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store/store";
import {ScreenType} from "../../store/appReducer/appReducer";
import {Halpers} from "../Hallpers/Hallpers";


export const MainBlock = () => {
    const screen = useSelector<AppRootStateType, ScreenType>(state => state.appData.screen)
    if (screen !== "startScreen" && screen !== "userNotFound") {
        return (
            <div className={style.container}>
                <UsersBlock/>
                <RepoBlock/>
            </div>
        )
    }
    return <><Halpers/></>

}