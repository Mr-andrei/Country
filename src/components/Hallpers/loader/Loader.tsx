import style from "./loader.module.css"


export const Loader = () => {
    return (
        <div className={style.loader_box}>
            <span className={style.loader}></span>
        </div>
    )
}