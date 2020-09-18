import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { deleteNote, editNote, loadNotes } from '../../store/actions/noteActions';
import { RootState } from '../../store/reducers/rootReducers';

const mapStateToProps = (state: RootState) => ({
    notes: state.notes.notes
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
        {
            loadNotes,
            deleteNote,
            editNote
        },
        dispatch
    );
};

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const NoteList: React.FC<Props> = (props) => {
    props.loadNotes();
    return (
        <React.Fragment>
            <ul>
                {props.notes.map(note => {
                    return (
                        <li key={note} onClick={() => props.deleteNote(note)}> {note} </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);