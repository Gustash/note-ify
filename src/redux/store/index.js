import C from '../constants';
import appReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const manageNotes = (store) => (next) => (action) => {

    let result;
    
    console.groupCollapsed(`dispatching action => ${action.type}`);
    console.log("Ammount of notes: " + store.getState().notes.length);

    result = next(action);

    console.log(`
    
        Notes
        =====
        ${JSON.stringify(store.getState().notes)}
    
    `);
    console.groupEnd();

    return result;
}

export default (initialState={}) => (
    applyMiddleware(thunk, manageNotes)(createStore)(appReducer, initialState)
);