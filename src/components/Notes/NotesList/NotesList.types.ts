import {Note} from "../../../redux/notes-reducer.types";


export type NotesListProps = {
    notes: Note[]
    getNoteId: (noteId: number) => void
}