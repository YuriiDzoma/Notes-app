import styles from './NoteExpandContainer.module.scss'
import {useParams} from "react-router-dom";
import {NoteExpandProps} from "./NoteExpandContainer.types";
import React from "react";
import CommentsList from "./CommentsList/CommentsList";
import {useSelector} from "react-redux";
import {IRootState} from "../NotesContainer/NotesContainer.types";
import NoteContent from "./NoteContent/NoteContent";
import ComeToHome from "../Common/ComeToHome/ComeToHome";



const NoteExpandContainer = () => {

    const noteId = useParams().id

    const note = useSelector((state) => state.notesPage.notes.find((note) => note.id === +noteId))

    return (

        <div className={styles.wrapper}>

            <ComeToHome />

            <NoteContent name={note.name} content={note.content} noteId={noteId} />

            <CommentsList comments={note.comments} />

        </div>
    )
}

export default NoteExpandContainer