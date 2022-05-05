import {ChangeEvent, KeyboardEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {getDataByNameTC, getRepoByNameTC} from "../../store/getDataByName/getDataByNameThuncCreator";
import style from "./header.module.css"
import gitPhoto from '../../assets/Vector (1).png'
import {setCurrentPageAC, setUserNameAC} from "../../store/getDataByName/getDataByNameAC";


export const Header = () => {

    const dispatch = useDispatch()
    const [inputState, setInputState] = useState('')

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputState(e.currentTarget.value)
        dispatch(setUserNameAC(e.currentTarget.value))

    }
    const clickHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            dispatch(getDataByNameTC())
            dispatch(getRepoByNameTC(1))
            dispatch(setCurrentPageAC(1))
            setInputState("")
        }
    }

    return (
        <header className={style.main_container}>
            <div className={style.git_image}>
                <img src={gitPhoto} alt=""/>
            </div>
            <div className={style.input_block}>
                <input
                    value={inputState}
                    onChange={inputChangeHandler}
                    onKeyPress={clickHandler}
                    type="text"
                    placeholder={"Search"}
                />
            </div>
        </header>
    )
}