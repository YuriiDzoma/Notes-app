import Note from "./Note/Note";


const NotesList = ({notes, getNote}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {notes.map((note, index) => <Note getNote={getNote} key={index} note={note} />)}
        </div>
    )
}

export default NotesList