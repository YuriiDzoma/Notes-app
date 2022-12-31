import React from 'react';
import './App.module.scss';
import styles from './App.module.scss'
import Header from "./components/Header/Header";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import {Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import NoteExpandContainer from "./components/NoteExpand/NoteExpandContainer";
import CreateNoteContainer from "./components/CreateNoteContainer/CreateNoteContainer";


const App = () => {

    return (

        <div className={styles.wrapper}>

            <Header/>

            <Routes>
                <Route path='/' element={<NotesContainer />} />
                <Route path=':id' element={<NoteExpandContainer />} />
                <Route path=':noteId/edit/' element={<CreateNoteContainer isEditor={true} />} />
                <Route path='/create/' element={<CreateNoteContainer isEditor={false} />} />
                <Route path='/settings/' element={<Settings />} />
            </Routes>

        </div>
    );
}

export default App;
