
export type Comment = {
    id: number
    author: string
    content: string
    created_at: string
}

export type Note = {
    id: number
    name: string
    content: string
    comments: Comment[]
}

export type NoteReducer = {
    count: number
    notes: Note[]
}