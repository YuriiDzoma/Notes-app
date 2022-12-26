import Note from "./Note/Note";
import {NotesListProps} from "./NotesList.types";
import React from "react";
import CreateNewNote from "./CreateNewNote/CreateNewNote";
import styles from './NotesList.module.scss'


const NotesList: React.FC<NotesListProps> = ({notes, getNoteId}) => {
    return (

        <div className={styles.notesList}>

            {notes.map((note, index) => <Note getNoteId={getNoteId} key={index} note={note} />)}

            <div className={styles.link}>
                <CreateNewNote />
            </div>

        </div>

    )
}

export default NotesList