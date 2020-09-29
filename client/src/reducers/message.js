import { SET_MESSAGE, REMOVE_MESSAGE } from '../actions/constants';

const initialState = [{
    
}];

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_MESSAGE:
            return [...state, action.payload];
        case REMOVE_MESSAGE:
            return state.filter(alert => alert.id !== action.payload);
        default:
            return state;
    }
}