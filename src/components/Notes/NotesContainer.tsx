import {useSelector} from "react-redux";
import NotesList from "./NotesList/NotesList";
import React from "react";
import {IRootState, NotesContainerProps} from "./NotesContainer.types";


const NotesContainer: React.FC<NotesContainerProps> = ({getNote}) => {

    const notes = useSelector((state: IRootState) => state.diary.notes)

    return (
        <div>
            <NotesList getNote={getNote} notes={notes} />
        </div>
    )
}


export default NotesContainer