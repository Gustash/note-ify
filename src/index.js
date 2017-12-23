import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import storeFactory from './redux/store';
import { addNote, removeNote} from './redux/actions';
import { Provider } from 'react-redux';

let state = {
    notes: [
        "This is the first note",
        "This is the second one"
    ]
};

const store = storeFactory(state);

render(
    (<Provider store={store}>
        <App />
    </Provider>),
    document.getElementById('react-container')
);