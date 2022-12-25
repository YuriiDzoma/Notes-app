import {Note} from "../../redux/notes-reducer.types";
import {AppStateType} from "../../redux/redux-store";


export type NotesContainerProps = {
    getNote: (note: Note) => void
}

export type IRootState = {
    state: AppStateType
    diary: any
    notes: Note[]
}