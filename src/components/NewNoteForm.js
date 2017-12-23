import React, { Component } from 'react';
import { Jumbotron, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

const NewNoteForm = (onNewNote=f=>f) => {
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
                    <FormControl ref={input => _note = input} type="text" />
                    <InputGroup.Button>
                        <Button type="submit" bsStyle="primary">Note down!</Button>
                    </InputGroup.Button>
                </InputGroup>
            </Jumbotron>
        </form>
    );
}

export default NewNoteForm