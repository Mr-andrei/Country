import {RepositoriesType, UserDataType} from "../../services/API/getUserDataAPI";
import {getDataByNameAC, getUserRepoByNameAC, setCurrentPageAC, setUserNameAC} from "./getDataByNameAC";


const initialState = {
    userData: {} as UserDataType,
    userRepo: [] as RepositoriesType[],
    currentPage: 1,
    userName:"",
}


export const getDataByNameReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "GET_USER_DATA": {
            return {...state, userData: action.userData}
        }
        case "GET_USER_REPOSITORIES" : {
            return {...state, userRepo: action.userRepo}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage:action.currenPage}
        }
        case "SET_USER_NAME": {
            return {...state, userName:action.userName}
        }
        default:
            return state
    }
}


type InitialStateType = {
    userData: UserDataType
    userRepo: RepositoriesType[]
    currentPage: number
    userName:string
}

export type ActionsType = ReturnType<typeof getDataByNameAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUserNameAC>
    | ReturnType<typeof getUserRepoByNameAC>