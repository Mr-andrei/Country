import {Dispatch} from "redux";
import {getCountryByRegionAC} from "../actionCreator/getCountryByregionAC";
import {getCountry} from "../api/getCountry";



export const getCountryByRegionTC = (region: string) => async (dispatch: Dispatch<ReturnType<typeof getCountryByRegionAC>>) => {
    try {
      const countries =  await getCountry.getCountryByRegion(region)
        dispatch(getCountryByRegionAC(countries.data))
    } catch {

    }
}


