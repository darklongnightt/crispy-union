import React from 'react';
import { connect } from 'react-redux';
import { deleteNote, editNote } from '../../store/actions/noteActions';
import { RootState } from '../../store/reducers/rootReducers';

const mapStateToProps = (state: RootState) => ({ notes: state.notes.notes })
const mapDispatchToProps = { deleteNote, editNote };
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const NoteList: React.FC<Props> = (props) => {
    return (
        <React.Fragment>
            <ul>
                {props.notes.map(note => {
                    return (
                        <li key={note}> {note} </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);