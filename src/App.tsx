import React from 'react';
import style from "./app.module.css"
import {Header} from "./components/Header/Header";
import {MainBlock} from "./components/MainBlock/MainBlock";


function App() {


    return (
        <div className={style.app}>
            <Header/>
            <MainBlock/>
        </div>
    );
}

export default App;
