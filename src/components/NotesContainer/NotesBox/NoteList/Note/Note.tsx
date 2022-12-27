import styles from './Note.module.scss'
import {Link} from "react-router-dom";
import {NoteProps} from "./Note.types";
import React from "react";

const Note:React.FC<NoteProps> = ({note, getNoteId}) => {
    return (

        <div>
            <Link className={styles.link} to={'/' + note.id}>
                <div className={styles.note} onClick={() => {getNoteId(note.id)}}>
                    <div>
                        <span>{note.name}</span>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Note;