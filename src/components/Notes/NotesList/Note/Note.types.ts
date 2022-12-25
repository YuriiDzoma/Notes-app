import {Note} from "../../../../redux/notes-reducer.types";

export type NoteProps = {
    note: Note
    getNote: (note: Note) => void
}