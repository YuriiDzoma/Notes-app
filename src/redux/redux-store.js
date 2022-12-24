import { combineReducers, configureStore} from "@reduxjs/toolkit";
import notesReducer from "./notes-reducer";

const rootReducer = combineReducers({
    notes: notesReducer
})

export const store = configureStore({
    reducer: rootReducer,
})