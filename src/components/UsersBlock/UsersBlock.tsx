import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store/store";
import {UserDataType} from "../../services/API/getUserDataAPI";
import style from "./userBlock.module.css"
import {numberWelding} from "../../utils/numberWelding";
import React from "react";


export const UsersBlock = React.memo( () => {

    const userData = useSelector<AppRootStateType, UserDataType>(state => state.userData.userData)

    return (

        <div className={style.main_wrapper}>
            <div className={style.avatar_block}>
                <img src={userData.avatar_url} alt="avatar"/>
            </div>
            <div className={style.names_block}>
                <h3 className={style.name}>
                    {userData.name}
                </h3>
                <a
                    target="_blank"
                    className={style.login_link}
                    href={userData.html_url}>
                    {userData.login}</a>
            </div>
            <div className={style.follows_block}>

                <span className={style.followers}>
                {numberWelding(userData.followers, 0)} followers
                </span>
                <span className={style.following}>
                    {userData.following} following
                </span>
            </div>

        </div>
    )
})