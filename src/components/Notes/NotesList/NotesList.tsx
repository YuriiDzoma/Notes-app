import Note from "./Note/Note";
import {NotesListProps} from "./NotesList.types";
import React from "react";


const NotesList: React.FC<NotesListProps> = ({notes, getNote}) => {
    return (

        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {notes.map((note, index) => <Note getNote={getNote} key={index} note={note} />)}
        </div>

    )
}

export default NotesList