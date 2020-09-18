import React from "react";
import "./App.css";
import NewNoteInput from "./components/notes/NewNoteInput";
import NoteList from "./components/notes/NoteList";

function App() {
  return (
    <div className="App">
      <div>hello world</div>

      <hr />
      <NewNoteInput />
      <hr />

      <NoteList />
    </div>
  );
}

export default App;
