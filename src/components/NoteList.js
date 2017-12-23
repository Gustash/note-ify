import React, { Component } from 'react';
import Note from './Note';

export default class NoteList extends Component {
    render() {
        return (
            <ul>
                { this.props.notes.map((note, i) => <Note key={i} note={note} />) }
            </ul>
        );
    }
}