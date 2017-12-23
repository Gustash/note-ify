import React, { Component } from 'react';
import NewNoteForm from './NewNoteForm';
import { Col } from 'react-bootstrap';
import NoteList from './NoteList';

import { connect } from 'react-redux';
import { addNote } from '../redux/actions';

const mapStateToProps = (state) => (
    {
        notes: state.notes
    }    
);

const mapDispatchToProps = (dispatch) => (
    {
        onNewNote(note) {
            dispatch(
                addNote(note)
            );
        }
    }
);

class App extends Component {
    render() {
        return (
            <Col sm={8} smOffset={2}>
                <NewNoteForm />
                <NoteList notes={ this.props.notes } />
            </Col>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);