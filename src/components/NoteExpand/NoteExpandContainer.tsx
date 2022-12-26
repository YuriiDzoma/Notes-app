import styles from './NoteExpandContainer.module.scss'
import {Link, Navigate} from "react-router-dom";
import {NoteExpandProps} from "./NoteExpandContainer.types";
import React from "react";
import CommentsList from "./CommentsList/CommentsList";
import {useSelector} from "react-redux";
import {IRootState} from "../Notes/NotesContainer.types";
import NoteContent from "./CommentsList/NoteContent/NoteContent";
import {Note} from "../../redux/notes-reducer.types";


const NoteExpandContainer:React.FC<NoteExpandProps> = ({noteId}) => {

    const note = useSelector((state: IRootState) => state.diary.notes.find((note: Note) => note.id === noteId))
    return (

        <div className={styles.wrapper}>

            <div  className={styles.toBack}>
                <Link to={'/'}><span>back</span></Link>
            </div>

            <NoteContent name={note.name} content={note.content} />

            <CommentsList comments={note.comments} />

        </div>
    )
}

export default NoteExpandContainer