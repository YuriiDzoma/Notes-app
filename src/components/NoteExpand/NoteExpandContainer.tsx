import styles from './NoteExpandContainer.module.scss'
import {Link} from "react-router-dom";
import {NoteExpandProps} from "./NoteExpandContainer.types";
import React from "react";
import CommentsList from "./CommentsList/CommentsList";
import {useSelector} from "react-redux";
import {IRootState} from "../NotesContainer/NotesContainer.types";
import NoteContent from "./NoteContent/NoteContent";
import {Note} from "../../redux/notes-reducer.types";
import ComeToHome from "../Common/ComeToHome/ComeToHome";


const NoteExpandContainer:React.FC<NoteExpandProps> = ({noteId}) => {

    const note = useSelector((state: IRootState) => state.diary.notes.find((note: Note) => note.id === noteId))

    return (

        <div className={styles.wrapper}>

            <ComeToHome />

            <NoteContent name={note.name} content={note.content} noteId={noteId} />

            <CommentsList comments={note.comments} />

        </div>
    )
}

export default NoteExpandContainer