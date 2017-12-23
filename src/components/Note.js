import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Note extends Component {
    render() {
        return (
            <li className="note-item">
                { this.props.note }
                <Button className="pull-right">Delete</Button>
            </li>
        );
    }
}