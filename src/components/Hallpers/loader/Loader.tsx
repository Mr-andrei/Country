import style from "./loader.module.css"


export const Loader = () => {
    return (

        <div className={style.linearActivity}>
            <div className={style.indeterminate}></div>
        </div>

    )
}