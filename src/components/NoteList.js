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
        <ul className="note-list">
            { props.notes.map((note, i) => <Note key={i} note={note} index={i} />) }
        </ul>
    );
}

export default connect(mapStateToProps)(NoteList);