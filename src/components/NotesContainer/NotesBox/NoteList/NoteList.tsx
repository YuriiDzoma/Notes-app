import Note from "./Note/Note";
import React from "react";
import {NotesListProps} from "../NotesBox.types";


const NoteList:React.FC<NotesListProps> = ({notes, getNoteId}) => (

    <>
        {notes.map((note, index) => <Note getNoteId={getNoteId} key={index} note={note}/>)}
    </>

)

export default NoteList