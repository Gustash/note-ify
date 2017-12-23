import C from './constants';
import appReducer from './store/reducers';

export const addNote = (note) => (
    {
        type: C.ADD_NOTE,
        payload: note
    }
)

export const removeNote = (index) => (
    {
        type: C.REMOVE_NOTE,
        payload: index
    }
)