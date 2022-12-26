
import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";
import {NoteReducer} from "./notes-reducer.types";

const initialState: NoteReducer = {
    count: 0,
    notes: [
        {id: 1, name: 'shopping list', content: 'need buy milk', comments: [
                {id: 1, author: 'John White', content: 'and buy meet', created_at: '21.12.2022'}
            ]},
        {id: 2, name: 'tasks for the day', content: 'meet with Katy in 21:00', comments: [
                {id: 1, author: 'Katy Ling', content: 'come in 20:30', created_at: '24.12.2022'},
                {id: 2, author: 'Katy Ling', content: 'sorry, come in 20:00', created_at: '24.12.2022'}
            ]}
    ]
}

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

export default createReducer(initialState, {
    // [increment]: function (state)  {
    //     state.count = state.count + 1
    // },
    // [decrement]: function (state)  {
    //     state.count = state.count + 1
    // }
})

