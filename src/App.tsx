import React from 'react';
import './App.module.scss';
import styles from './App.module.scss'
import Header from "./components/Header/Header";
import NotesContainer from "./components/Notes/NotesContainer";
import {Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";

function App() {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <Routes>
                <Route path='/' element={<NotesContainer/>}/>
                <Route path=':id' element={<></>} />
                <Route path='/settings/*' element={<Settings />} />
            </Routes>

        </div>
    );
}

export default App;
