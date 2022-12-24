import {useSelector} from "react-redux";
import Note from "./NotesList/Note/Note";
import NotesList from "./NotesList/NotesList";


const NotesContainer = (props) => {

    const notes = useSelector(state => state.notes.notes)

    return (
        <div>
            <NotesList notes={notes} />
        </div>
    )
}


export default NotesContainer