import {createSlice} from "@reduxjs/toolkit";

type Comment = {
    id: number,
    author: string,
    content: string,
    created_at: string
}

type newNote = {
    id: number,
    name: string,
    content: string
    comments: Comment[]
}

const notesSlice = createSlice({
    name: 'notesPage',
    initialState: {
        notes: [
            {id: 1, name: 'shopping list', content: 'need buy milk', comments: [
                    {id: 1, author: 'John White', content: 'and buy meet', created_at: '21.12.2022'}
                ]},
            {id: 2, name: 'tasks for the day', content: 'meet with Katy in 21:00', comments: [
                    {id: 1, author: 'Katy Ling', content: 'come in 20:30', created_at: '24.12.2022'},
                    {id: 2, author: 'Katy Ling', content: 'sorry, come in 20:00', created_at: '24.12.2022'}
                ]}
        ]
    },
    reducers: {
        addNote(state, action) {
            const newNote: newNote = {
                id: state.notes.length +1,
                name: action.payload.name,
                content: action.payload.content,
                comments: []
            }
            state.notes.push(newNote)
        },
        deleteNote(state, action) {
            state.notes = state.notes.filter((item) => item.id !== action.payload)

        }
    }
})

export default notesSlice.reducer
export const {addNote, deleteNote} = notesSlice.actions