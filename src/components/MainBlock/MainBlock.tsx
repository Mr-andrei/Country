import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store/store";
import {CountryType} from "../../store/reducers/reducerGetCountryByRegion";
import {useEffect} from "react";
import {getCountryByRegionTC} from "../../store/thuncCreator/getCountryByRegionTC";


export const MainBlock = () => {
    const dispatch = useDispatch()
    const countries = useSelector<AppRootStateType, CountryType[]>(state => state.countries.countries)
    console.log(countries)
    useEffect(() => {
dispatch(getCountryByRegionTC("europe"))
    }, [])

    return (
        <div>
            {countries.map((m, i) => <div key={i}>
                <div>
                    <img src={m.flags.svg} alt=""/>
                </div>
                <div>
                    <span>{m.name.common}</span>
                    <span>{m.capital}</span>
                    <span>{m.region}</span>
                    <span>{m.population}</span>
                </div>
            </div>)}

        </div>
    )
}