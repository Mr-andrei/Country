import {getDataByNameAC, getUserRepoByNameAC} from "./getDataByNameAC";
import {Dispatch} from "redux";
import {ActionsType} from "./getDataByNameReducer";
import {getUserDataAPI} from "../../services/API/getUserDataAPI";
import {AppRootStateType} from "../store/store";
import {ActionsAppReducerType} from "../appReducer/appReducer";
import {setErrorScreen, setLoader} from "../appReducer/appReducerAC";


export const getDataByNameTC = () => async (dispatch: Dispatch<ActionsType | ActionsAppReducerType>, getState: () => AppRootStateType) => {
    const userName = getState().userData.userName;
    try {
        dispatch(setLoader(true))
        const userData = await getUserDataAPI.getUserData(userName)
        dispatch(getDataByNameAC(userData.data))
        dispatch(setErrorScreen("everythingGood"))
        dispatch(setLoader(false))
    } catch (e: any) {
        if (e.response.data.message === "Not Found") {
            dispatch(setErrorScreen("userNotFound"))
        }
    } finally {
        dispatch(setLoader(false))
    }

}

export const getRepoByNameTC = (page: number) => async (dispatch: Dispatch<ActionsType | ActionsAppReducerType>, getState: () => AppRootStateType) => {
    const userName = getState().userData.userName;
    try {
        dispatch(setLoader(true))
        const userRepo = await getUserDataAPI.getRepositories(userName, page)
        dispatch(getUserRepoByNameAC(userRepo.data))
        dispatch(setLoader(false))
    } catch {
        dispatch(setLoader(false))
    }
}

