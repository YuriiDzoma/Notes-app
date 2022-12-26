import styles from "./NoteContent.module.scss";
import React from "react";
import {noteContentProps} from "./NoteContent.types";


const NoteContent:React.FC<noteContentProps> = ({name, content}) => {
    return (
        <div className={styles.noteContainer}>
            <div className={styles.noteName}>
                <span>{name}</span>
            </div>
            <div className={styles.noteContent}>
                <span>{content}</span>
            </div>
            <div className={styles.editor}>
                <span>edit</span>
            </div>
        </div>
    )
}

export default NoteContent