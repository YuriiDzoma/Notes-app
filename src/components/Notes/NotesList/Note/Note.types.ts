import {Note} from "../../../../redux/notes-reducer.types";

export type NoteProps = {
    note: Note
    getNoteId: (noteId: number) => void
}