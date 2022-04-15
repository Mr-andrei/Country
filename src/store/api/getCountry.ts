import axios, {AxiosResponse} from "axios";
import {CountryType} from "../reducers/reducerGetCountryByRegion";


const instance = axios.create({
    baseURL:'https://restcountries.com/v3.1/'

})

export const getCountry = {
    getCountryByRegion(region:string){
        return instance.get<RequestDataType,AxiosResponse<GetTasksResponse>>(`region/${region}`)
    }
}



type RequestDataType = {
    region:string
}

type GetTasksResponse = CountryType[]