import Note from "./NoteList/Note/Note";
import {NotesListProps} from "./NotesBox.types";
import React from "react";
import CreateNewNote from "./CreateNewNote/CreateNewNote";
import styles from './NotesBox.module.scss'
import NoteList from "./NoteList/NoteList";


const NotesBox: React.FC<NotesListProps> = ({notes, getNoteId}) => {
    return (

        <div className={styles.notesList}>

            <NoteList notes={notes} getNoteId={getNoteId} />

            <div className={styles.link}>
                <CreateNewNote />
            </div>

        </div>

    )
}

export default NotesBox