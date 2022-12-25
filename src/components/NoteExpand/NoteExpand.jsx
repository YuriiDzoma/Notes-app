import styles from './NoteExpand.module.scss'
import {Link} from "react-router-dom";
import {NoteExpandProps} from "./NoteExpand.types";
import React from "react";
import CommentsList from "./CommentsList/CommentsList";


const NoteExpand = ({note}) => {

    return (
        <div className={styles.wrapper}>
            <div  className={styles.toBack}>
                <Link to={'/'}><span>back</span></Link>
            </div>
            <div className={styles.noteContainer}>
                <div className={styles.noteName}>
                    <span>{note.name}</span>
                </div>
                <div className={styles.noteContent}>
                    <span>{note.content}</span>
                </div>
                <div className={styles.editor}>
                    <span>edit</span>
                </div>
            </div>

            {/*<CommentsList comments={props.note.comments} />*/}

        </div>
    )
}

export default NoteExpand