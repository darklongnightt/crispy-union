export type Action = { type: string, payload: string }

export const addNote = (note: string): Action => {
    return {
        type: "ADD_NOTE",
        payload: note,
    }
}

export const deleteNote = (note: string): Action => ({ type: "DELETE_NOTE", payload: note })

export const editNote = (note: string): Action => ({ type: "EDIT_NOTE", payload: note })