import {ScreenType} from "./appReducer";

export const setErrorScreen = (textError: ScreenType) => ({
    type: "SET_ERROR_SCREEN",
    textError
} as const)

export const setLoader = (loader: boolean) => ({
    type: "SET_LOADER",
    loader
} as const)