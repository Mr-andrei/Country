import {setErrorScreen, setLoader} from "./appReducerAC";

const initialState: InitialStateType = {
    status: false,
    screen: 'startScreen'
}


export const appReducer = (state = initialState, action: ActionsAppReducerType): InitialStateType => {
    switch (action.type) {
        case "SET_ERROR_SCREEN": {
            return {...state, screen: action.textError}
        }
        case "SET_LOADER": {
            return {...state, status: action.loader }
        }
        default:
            return state
    }
}


export type ScreenType = 'userNotFound' | 'startScreen'  | "everythingGood"

export type InitialStateType = {
    status: boolean
    screen: ScreenType
}

export type ActionsAppReducerType = ReturnType<typeof setErrorScreen>
    | ReturnType<typeof setLoader>