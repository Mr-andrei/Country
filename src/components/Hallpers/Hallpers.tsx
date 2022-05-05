import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store/store";
import {ScreenType} from "../../store/appReducer/appReducer";



export const Halpers = () => {

    const screen = useSelector<AppRootStateType, ScreenType>(state => state.appData.screen)

     if (screen === "startScreen") {
         return (
             <div>
                 start screen
             </div>
         )
     }
    if (screen === "userNotFound") {
        return (
            <div>
                userNotFound
            </div>
        )
    }
     return <>  </>

}