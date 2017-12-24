import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { removeNote } from '../redux/actions';

const mapDispatchToProps = (dispatch) => (
    {
        onRemoveNote(index) {
            dispatch(
                removeNote(index)
            );
        }
    }
);

const Note = ({ note="", index=-1, onRemoveNote=f=>f }) => {
    const removeNote = (index) => {
        onRemoveNote(index);
    }

    return (
        <li className="note-item">
            { note }
            <Button className="pull-right" onClick={() => removeNote(index)}>Delete</Button>
        </li>
    );
}

export default connect(null, mapDispatchToProps)(Note);