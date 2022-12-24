import {useSelector} from "react-redux";
import NotesList from "./NotesList/NotesList";


const NotesContainer = ({getNote}) => {

    const notes = useSelector(state => state.notes.notes)

    return (
        <div>
            <NotesList getNote={getNote} notes={notes} />
        </div>
    )
}


export default NotesContainer