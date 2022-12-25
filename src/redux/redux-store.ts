import { combineReducers, configureStore} from "@reduxjs/toolkit";
import notesReducer from "./notes-reducer";

const rootReducers = combineReducers({
    diary: notesReducer
})

export const store = configureStore({
    reducer: rootReducers,
})

type RootReducer = typeof rootReducers;
export type AppStateType = ReturnType<RootReducer>

// @ts-ignore
window.store = store;
