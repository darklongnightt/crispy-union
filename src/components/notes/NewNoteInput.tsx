import React, { ChangeEvent, useState } from "react";
import { connect } from 'react-redux';
import { addNote } from '../../store/actions/noteActions';

const mapDispatchToProps = { addNote };
type Props = typeof mapDispatchToProps;

const NewNoteInput: React.FC<Props> = props => {
  const [note, setNote] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNote = () => {
    props.addNote(note);
    setNote("");
  };

  return (
    <>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        placeholder="Note"
      />
      <button onClick={onAddNote}>Add Note</button>
    </>
  );
};

export default connect(null, mapDispatchToProps)(NewNoteInput);