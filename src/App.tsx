import React, {useState} from 'react';
import './App.module.scss';
import styles from './App.module.scss'
import Header from "./components/Header/Header";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import {Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import NoteExpandContainer from "./components/NoteExpand/NoteExpandContainer";
import CreateNote from "./components/CreateNote/CreateNote";


const App = () => {

    return (

        <div className={styles.wrapper}>

            <Header/>

            <Routes>
                <Route path='/' element={<NotesContainer />} />
                <Route path=':id' element={<NoteExpandContainer />} />
                <Route path=':noteId/edit/' element={<CreateNote />} />
                <Route path='/create/' element={<CreateNote  />} />
                <Route path='/settings/' element={<Settings />} />
            </Routes>

        </div>
    );
}

export default App;
