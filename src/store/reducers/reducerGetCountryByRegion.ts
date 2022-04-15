import {getCountryByRegionAC} from "../actionCreator/getCountryByregionAC";


export type CountryType = {
    name: {
        common: string
    }
    region: string
    capital: string[]
    population: string
    flags: {
        svg: string
    }
}


export type InitialStateGetCountriesType ={
    countries:CountryType[]
}

const initialState:InitialStateGetCountriesType = {
    countries:[]
}

export const reducerGetCountryByRegion = (state = initialState, action: allActionType): InitialStateGetCountriesType => {
    switch (action.type) {
        case "GET_COUNTRY_BY_REGION":{
            return {...state, countries:action.counties}
        }
        default :
            return state
    }
}


type allActionType = ReturnType<typeof getCountryByRegionAC>
