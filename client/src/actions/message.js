import uuid from 'uuid';
import { SET_MESSAGE, REMOVE_MESSAGE } from './constants';

export const setMessage = (text, messageType) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_MESSAGE,
        payload: { text, messageType, id }
    });
}