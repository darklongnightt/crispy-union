import { Action } from "../actions/noteActions"

export interface NotesState {
  notes: string[];
}

const initialState = {
  notes: [],
};

export const notesReducer = (state: NotesState = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };

    case "DELETE_NOTE":
      return { ...state, notes: state.notes.filter((note) => note !== action.payload) };

    case "EDIT_NOTE":
      return { ...state, notes: [...state.notes, state.notes[state.notes.findIndex(note => note === action.payload)] = "changed"] };

    case "SET_NOTES":
      return { ...state, notes: [...action.payload] }

    default:
      return state;
  }
};
