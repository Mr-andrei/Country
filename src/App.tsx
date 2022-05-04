import React from 'react';
import style from "./app.module.css"
import {Header} from "./components/Header/Header";
import {MainBlock} from "./components/MainBlock/MainBlock";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store/store/store";

import {Loader} from "./components/Hallpers/loader/Loader";


function App() {
    const loader = useSelector<AppRootStateType, boolean>(state => state.appData.status)
    return (
        <div className={style.app}>
            <Header/>
            {loader ? <Loader/> : <MainBlock/>}
        </div>
    );
}

export default App;
