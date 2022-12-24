import Note from "./Note/Note";
import styles from './NotesList.modules.scss'

const NotesList = ({notes}) => {
    return (
        <div className={styles.notesList}>
            {notes.map((note, index) => <Note key={index} note={note} />)}
        </div>
    )
}

export default NotesList