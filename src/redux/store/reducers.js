import C from '../constants';
import { combineReducers } from 'redux';

export const notes = (state=[], action) => {
    switch(action.type) {
        case C.ADD_NOTE:
            return [
                ...state,
                action.payload
            ];

        case C.REMOVE_NOTE:
            return state.filter((note, i) => i !== action.payload);

        default:
            return state;
    }
}

export default combineReducers({
    notes
});