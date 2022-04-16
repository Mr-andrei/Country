import {Dispatch} from "redux";
import {getCountryByFullNameAC, getCountrySearchAC} from "../actionCreator/getCountrySearchAC";
import {getCountry} from "../api/getCountry";


export const getCountrySearchTC = (region: string) => async (dispatch: Dispatch<ReturnType<typeof getCountrySearchAC>>) => {
    try {
        const countries = await getCountry.getCountryByRegion(region)
        dispatch(getCountrySearchAC(countries.data))
    } catch {

    }
}

export const getCountryByNameTC = (name: string) => async (dispatch: Dispatch<ReturnType<typeof getCountrySearchAC>>) => {
    try {
        const countries = await getCountry.getCountryByName(name)
        dispatch(getCountrySearchAC(countries.data))
    } catch {
    }
}

export const getCountryByFullNameTC = (name: string | undefined) => async (dispatch: Dispatch<ReturnType<typeof getCountryByFullNameAC>>) => {
    try {
        const countries = await getCountry.getCountryByFullName(name)
        let currencies = Object.keys(countries.data[0]?.currencies)
        let languages = Object.values(countries.data[0]?.languages)

        dispatch(getCountryByFullNameAC(countries.data,currencies,languages))

    } catch {
    }
}

