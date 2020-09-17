import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { NewNoteInput } from "./components/notes/NewNoteInput";
import { NotesState } from "./store/reducers/noteReducers";
import { addNote } from "./store/actions/noteActions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
  const dispatch = useDispatch()

  const onAddNote = (note:string) => {
    dispatch(addNote(note))
  }
   
  return (
    <div className="App">
      <div>hello world</div>

      <hr />
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <br />

      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>
        })}
        <li>Some notes</li>
      </ul>
    </div>
  );
}

export default App;
