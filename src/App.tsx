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

    const [noteId, setNoteId] = useState<number>()
    const getNoteId = (value: number | undefined) => {
        setNoteId(value)
    }

    return (

        <div className={styles.wrapper}>

            <Header/>

            <Routes>
                <Route path='/' element={<NotesContainer getNoteId={getNoteId} />} />
                <Route path=':id' element={<NoteExpandContainer noteId={noteId} />} />
                <Route path=':noteId/edit/' element={<CreateNote />} />
                <Route path='/create/' element={<CreateNote  />} />
                <Route path='/settings/' element={<Settings />} />
            </Routes>

        </div>
    );
}

export default App;
