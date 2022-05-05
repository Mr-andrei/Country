import {RepositoriesType, UserDataType} from "../../services/API/getUserDataAPI";


export const getDataByNameAC = (userData: UserDataType) => ({
    type: "GET_USER_DATA",
    userData,
} as const)
export const getUserRepoByNameAC = (userRepo: RepositoriesType[]) => ({
    type: "GET_USER_REPOSITORIES",
    userRepo,
} as const)

export const setCurrentPageAC = (currenPage:number) => ({
    type: "SET_CURRENT_PAGE",
    currenPage,
} as const)

export const setUserNameAC = (userName:string) => ({
    type: "SET_USER_NAME",
    userName,
} as const)

