import React, { Component } from 'react';
import Note from './Note';

import { connect } from 'react-redux';

const mapStateToProps = (state) => (
    {
        notes: state.notes
    }
);

const NoteList = (props) => {
    return (
        <ul>
            { props.notes.map((note, i) => <Note key={i} note={note} />) }
        </ul>
    );
}

export default connect(mapStateToProps)(NoteList);