import axios, {AxiosResponse} from "axios";


const instance = axios.create({
    baseURL: 'https://api.github.com/users/',

})


export const getUserDataAPI = {
    getUserData(name: string) {
        return instance.get<UserDataType>(`${name}`)
    },
    getRepositories(name: string,currentPage:number) {
        return instance.get<RequestForRepoType,AxiosResponse<RepositoriesType[]> >(`${name}/repos`,{
            params:{
                per_page:4,
                page:currentPage,
            }
        })
    }
}


export type UserDataType = {
    id: number
    login: string
    avatar_url: string
    html_url: string
    name: string
    public_repos: number
    followers: number
    following: number
}

export type RepositoriesType = {
    name: string
    id:string
    html_url: string
    description: string
}

export type RequestForRepoType = {
    per_page?: string;

}