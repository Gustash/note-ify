import React from 'react';
import NewNoteForm from './NewNoteForm';
import NoteList from './NoteList';
import { Col } from 'react-bootstrap';

const App = () => {
    return (
            <Col sm={8} smOffset={2}>
                <NewNoteForm />
                <NoteList />
            </Col>
        );
}

export default App;