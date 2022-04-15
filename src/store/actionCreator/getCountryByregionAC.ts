import {CountryType} from "../reducers/reducerGetCountryByRegion";



export const getCountryByRegionAC = (counties: CountryType[]) => ({type:"GET_COUNTRY_BY_REGION", counties} as const )


