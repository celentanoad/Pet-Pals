import {v4 as uuidv4 } from 'uuid';
import { SET_MESSAGE, REMOVE_MESSAGE } from './constants';

export const setMessage = (text, messageType) => dispatch => {
    const id = uuidv4();
    dispatch({
        type: SET_MESSAGE,
        payload: { text, messageType, id }
    });
    setTimeout(() => dispatch({ 
        type: REMOVE_MESSAGE,
        payload: id
    }), 5000);
};