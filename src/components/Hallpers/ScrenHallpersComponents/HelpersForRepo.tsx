import style from "./helpers.module.css";
import screen from "./../../../assets/screenEmpty.png"



export const HelpersForRepo = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.image_block_repo}>
                    <img src={screen} alt="search"/>
                </div>
                <span className={style.text}>Repositories list is empty.</span>
            </div>
        </div>
    )
}

