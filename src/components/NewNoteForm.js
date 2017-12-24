import React from 'react';
import { Jumbotron, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addNote } from '../redux/actions';

const mapDispatchToProps = (dispatch) => (
    {
        onNewNote(note) {
            dispatch(
                addNote(note)
            );
        }
    }
);

const NewNoteForm = ({ onNewNote=f=>f }) => {
    const sidePadding = { paddingLeft: '16px', paddingRight: '16px' };

    let _note;

    const submit = (e) => {
        e.preventDefault();
        onNewNote(_note.value);
        _note.value = '';
    }

    return (
        <form onSubmit={submit}>
            <Jumbotron style={sidePadding}>
                <h2>Take that note boii</h2>
                <InputGroup>
                    <FormControl inputRef={input => _note = input} type="text" />
                    <InputGroup.Button>
                        <Button type="submit" bsStyle="primary">Note down!</Button>
                    </InputGroup.Button>
                </InputGroup>
            </Jumbotron>
        </form>
    );
}

export default connect(null, mapDispatchToProps)(NewNoteForm);