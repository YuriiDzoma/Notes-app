import {Note} from "../../../redux/notes-reducer.types";


export type NotesListProps = {
    notes: Note[]
    getNote: (note: Note) => void
}