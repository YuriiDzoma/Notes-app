import {useSelector} from "react-redux";
import React from "react";
import {IRootState, NotesContainerProps} from "./NotesContainer.types";
import NotesBox from "./NotesBox/NotesBox";


const NotesContainer: React.FC<NotesContainerProps> = () => {

    const notes = useSelector((state: IRootState) => state.notesPage.notes)

    return (

        <div>
            <NotesBox notes={notes} />
        </div>

    )
}


export default NotesContainer