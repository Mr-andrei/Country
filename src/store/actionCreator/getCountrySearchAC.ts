import {CountriesType, CountryType} from "../reducers/reducerGetCountry";


export const getCountrySearchAC = (counties: CountriesType[]) => ({type: "GET_COUNTRY_BY_REGION", counties} as const)
export const getCountryByFullNameAC = (country: CountryType[], currencies: string[] | unknown[], languages: string[] | unknown[]) => ({
    type: "GET_COUNTRY_BY_FULL_NAME",
    country: country,
    currencies,
    languages,
} as const)


