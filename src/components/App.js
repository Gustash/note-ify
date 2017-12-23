import React, { Component } from 'react';
import NewNoteForm from './NewNoteForm';
import { Col } from 'react-bootstrap';
import NoteList from './NoteList';

export default class App extends Component {
    render() {
        return (
            <Col sm={8} smOffset={2}>
                <NewNoteForm />
                <NoteList notes={ this.props.notes } />
            </Col>
        );
    }
}