import React, {useState} from 'react';
import './App.module.scss';
import styles from './App.module.scss'
import Header from "./components/Header/Header";
import NotesContainer from "./components/Notes/NotesContainer";
import {Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import NoteExpand from "./components/NoteExpand/NoteExpand";
import {Note} from "./redux/notes-reducer.types";

const App = () => {

    const [note, setNote] = useState<Note>()
    const getNote = (value: Note) => {
        setNote(value)
    }

    return (
        <div className={styles.wrapper}>
            <Header/>
            <Routes>
                <Route path='/' element={<NotesContainer getNote={getNote} />}/>
                <Route path=':id' element={<NoteExpand note={note} />} />
                <Route path='/settings/*' element={<Settings />} />
            </Routes>

        </div>
    );
}

export default App;
