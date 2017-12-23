import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import storeFactory from './redux/store';
import { addNote, removeNote} from './redux/actions';
import { Provider } from 'react-redux';

import './stylesheets/styles.css';

const initialState = (localStorage.getItem('state') ?
    JSON.parse(localStorage.getItem('state')) :
    {
        notes: [
            "You don't have any notes. Note down using the form above!"
        ]
    }
);

const saveState = () => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
}

const store = storeFactory(initialState);
store.subscribe(saveState);

render(
    (<Provider store={store}>
        <App />
    </Provider>),
    document.getElementById('react-container')
);