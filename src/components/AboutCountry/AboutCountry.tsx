import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCountryByFullNameTC} from "../../store/thuncCreator/getCountrySearchTC";
import {AppRootStateType} from "../../store/store/store";
import {CountryType} from "../../store/reducers/reducerGetCountry";


export const AboutCountry = () => {

    const {name} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountryByFullNameTC(name))
    }, [])
    const country = useSelector<AppRootStateType, CountryType[]>(state => state.countries.country)
    console.log(country)
    return (
        <div>

        </div>
    )
}