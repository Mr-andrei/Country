import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store/store";
import {ScreenType} from "../../../store/appReducer/appReducer";
import style from "./helpers.module.css"
import search from "./../../../assets/searchInput.svg"
import user from "./../../../assets/user-128.png"


export const Helpers = () => {

    const screen = useSelector<AppRootStateType, ScreenType>(state => state.appData.screen)

    if (screen === "startScreen") {
        return (
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.image_block}>
                        <img src={search} alt="search"/>
                    </div>
                    <span className={style.text}>Start with search <br/> a GitHub user.</span>
                </div>
            </div>
        )
    }
    if (screen === "userNotFound") {
        return (
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.image_block}>
                        <img src={user} alt="user"/>
                    </div>
                    <span className={style.text}>User not found.</span>
                </div>
            </div>
        )
    }
    return <>  </>

}