import styles from "./NoteContent.module.scss";
import React from "react";
import {noteContentProps} from "./NoteContent.types";
import {Link} from "react-router-dom";


const NoteContent:React.FC<noteContentProps> = ({name, content, noteId}) => {

    return (

        <div className={styles.noteContainer}>

            <div className={styles.editor}>
                <Link to={'/' + noteId + /edit/}>
                <span>edit</span>
                </Link>
            </div>

            <div className={styles.noteName}>
                <span>{name}</span>
            </div>

            <div className={styles.noteContent}>
                <span>{content}</span>
            </div>

        </div>

    )
}

export default NoteContent