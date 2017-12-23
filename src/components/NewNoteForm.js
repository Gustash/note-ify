import React, { Component } from 'react';
import { Jumbotron, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

export default class NewNoteForm extends Component {
    render() {
        const sidePadding = { paddingLeft: '16px', paddingRight: '16px' };

        return (
            <Jumbotron style={sidePadding}>
                <h2>Take that note boii</h2>
                <InputGroup>
                    <FormControl type="text" />
                    <InputGroup.Button>
                        <Button bsStyle="primary">Note down!</Button>
                    </InputGroup.Button>
                </InputGroup>
            </Jumbotron>
        );
    }
}