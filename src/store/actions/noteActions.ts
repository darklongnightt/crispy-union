import { Dispatch } from "react"
import { AnyAction } from "redux"

// Define interfaces for different actions
export interface AddNote {
    type: "ADD_NOTE"
    payload: string
}

export interface DeleteNote {
    type: "DELETE_NOTE"
    payload: string
}

export interface EditNote {
    type: "EDIT_NOTE"
    payload: string
}

export interface SetNotes {
    type: "SET_NOTES"
    payload: string[]
}

// Actions are objects with type and payload
export type Action = AddNote | DeleteNote | EditNote | SetNotes

// Action creators are constructor for the action objects
export const addNote = (note: string): Action => {
    return {
        type: "ADD_NOTE",
        payload: note,
    }
}

export const deleteNote = (note: string): Action => ({ type: "DELETE_NOTE", payload: note })

export const editNote = (note: string): Action => ({ type: "EDIT_NOTE", payload: note })

export const setNotes = (notes: string[]): Action => ({ type: "SET_NOTES", payload: notes })

// Action creator that returns a thunk: function
export const loadNotes = () => {
    return (dispatch: Dispatch<AnyAction>) => {
        // Simulate loading an API that returns something after 3000ms
        console.log('loading some dummy data...')
        setTimeout(() => {
            dispatch(setNotes(["returned", "notes", "after", "api", "callsback"]));
        }, 3000);
    }
}