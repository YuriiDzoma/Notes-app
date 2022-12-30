import {Note} from "../../redux/notes-reducer.types";
import {AppStateType} from "../../redux/redux-store";


export type NotesContainerProps = {

}

export type IRootState = {
    state: AppStateType
    notesPage: any
    notes: Note[]
}