import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import storeFactory from './redux/store';
import { addNote, removeNote} from './redux/actions';

let state = {
    notes: [
        "This is the first note",
        "This is the second one"
    ]
};

const store = storeFactory(state);

store.dispatch(
    addNote("This is another one I added!")
);

store.dispatch(
    removeNote(0)
);

render(
    <App notes={store.getState().notes} />, 
    document.getElementById('react-container')
);