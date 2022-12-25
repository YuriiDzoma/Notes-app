import styles from './Note.module.scss'
import {Link} from "react-router-dom";
import {NoteProps} from "./Note.types";
import React from "react";

const Note:React.FC<NoteProps> = ({note, getNote}) => {
    return (
        <Link to={'/' + note.id}>
            <div className={styles.note} onClick={() => {
                getNote(note)
            }}>
                <div>
                    <span>{note.name}</span>
                </div>
            </div>
        </Link>
    )
}

export default Note;