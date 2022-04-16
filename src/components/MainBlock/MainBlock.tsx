import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store/store";
import {CountriesType} from "../../store/reducers/reducerGetCountry";
import {useEffect} from "react";
import {getCountrySearchTC} from "../../store/thuncCreator/getCountrySearchTC";
import style from "./mainBlock.module.css"
import { NavLink } from "react-router-dom";


export const MainBlock = () => {
    const dispatch = useDispatch()
    const countries = useSelector<AppRootStateType, CountriesType[]>(state => state.countries.countries)


    useEffect(() => {
        dispatch(getCountrySearchTC("europe"))
    }, [])

    return (

        <div className={style.container}>
            {countries.map((m, i) => <div className={style.block_country} key={i}>
                <div className={style.block_image}>
                    <img className={style.image_flag} src={m.flags.png} alt="flag"/>
                </div>
                <div className={style.block_text_info}>
                    <NavLink to={`/aboutCountry/${m.name.common}`} className={style.text_line_capital}>{m.name.common}</NavLink>
                    <span className={style.text_line}> Capital: <span className={style.text_inside}>{m.capital} </span></span>
                    <span className={style.text_line}> Region: <span
                        className={style.text_inside}>{m.region} </span></span>
                    <span className={style.text_line}> Population:<span
                        className={style.text_inside}>{m.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} </span></span>
                </div>
            </div>)}

        </div>
    )
}