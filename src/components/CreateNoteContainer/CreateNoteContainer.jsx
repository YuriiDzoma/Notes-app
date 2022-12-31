import styles from "./CreateNoteContainer.module.scss"
import ComeToHome from "../Common/ComeToHome/ComeToHome";
import CreateNoteForm from "./CreateNoteForm/CreateNoteForm";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {IRootState} from "../NotesContainer/NotesContainer.types";


//// in work process

const CreateNoteContainer = ({isEditor}) => {

    const id = useParams().noteId

    const note = useSelector((state) => state.notesPage.notes.find((note) => note.id === +id))

    return (
        <div className={styles.createNoteContainer}>

            <ComeToHome />

                <CreateNoteForm isEditor={isEditor} id={id}
                                name={isEditor ? note.name : null}
                                content={isEditor ? note.content : null} />

        </div>
    )
}

export default CreateNoteContainer