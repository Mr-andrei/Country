import {getCountryByFullNameAC, getCountrySearchAC} from "../actionCreator/getCountrySearchAC";


export type CountriesType = {
    name: {
        common: string
    }
    region: string
    capital: string[]
    population: string
    flags: {
        png: string
    }
}


export type CountryType = {
    name: {
        common: string
    }
    region: string
    subregion: string
    capital: string[]
    population: string
    flags: {
        png: string
    }
    borders: string[]
    tld: string[]
}


export type InitialStateGetCountriesType = {
    countries: CountriesType[]
    country: CountryType[]
    currencies: string[] | unknown[]
    languages: string[] | unknown[]
}

const initialState: InitialStateGetCountriesType = {
    countries: [],
    country: [],
    currencies: [],
    languages: [],
}

export const reducerGetCountry = (state = initialState, action: allActionType): InitialStateGetCountriesType => {
    switch (action.type) {
        case "GET_COUNTRY_BY_REGION": {
            return {...state, countries: action.counties}
        }
        case "GET_COUNTRY_BY_FULL_NAME" : {
            return {...state, country:action.country, currencies:action.currencies, languages:action.languages}
        }
        default :
            return state
    }
}


type allActionType = ReturnType<typeof getCountrySearchAC> | ReturnType<typeof getCountryByFullNameAC>
