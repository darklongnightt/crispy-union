import { createStore } from 'redux'
import { notesReducer } from './reducers/noteReducers'

export const store = createStore(notesReducer)