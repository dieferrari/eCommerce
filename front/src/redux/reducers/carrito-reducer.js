import {ADD_LOCAL_CARRITO} from '../constants.js';

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOCAL_CARRITO:
            return 
        default:
            return state;
    }
}