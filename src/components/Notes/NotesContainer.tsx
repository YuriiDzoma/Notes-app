import {useSelector} from "react-redux";
import NotesList from "./NotesList/NotesList";
import React from "react";
import {IRootState, NotesContainerProps} from "./NotesContainer.types";


const NotesContainer: React.FC<NotesContainerProps> = ({getNoteId}) => {

    const notes = useSelector((state: IRootState) => state.diary.notes)

    return (
        <div>
            <NotesList getNoteId={getNoteId} notes={notes} />
        </div>
    )
}


export default NotesContainer