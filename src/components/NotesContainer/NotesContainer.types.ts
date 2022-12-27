import {Note} from "../../redux/notes-reducer.types";
import {AppStateType} from "../../redux/redux-store";


export type NotesContainerProps = {
    getNoteId: (noteId: number | undefined) => void
}

export type IRootState = {
    state: AppStateType
    diary: any
    notes: Note[]
}