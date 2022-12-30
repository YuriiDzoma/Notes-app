import Note from "./NoteList/Note/Note";
import {NotesListProps} from "./NotesBox.types";
import React from "react";
import CreateNewNote from "./CreateNewNote/CreateNewNote";
import styles from './NotesBox.module.scss'
import NoteList from "./NoteList/NoteList";


const NotesBox: React.FC<NotesListProps> = ({notes}) => {
    return (

        <div className={styles.notesList}>

            <NoteList notes={notes}  />

            <div className={styles.link}>
                <CreateNewNote />
            </div>

        </div>

    )
}

export default NotesBox