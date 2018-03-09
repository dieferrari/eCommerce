import { SET_USER } from '../constants.js';
import { RECEIVE_USER } from '../constants';
const initialState = {
    user: {},
    carrito:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.fetch.user,
                carrito: action.fetch.carrito}
        case RECEIVE_USER:
            return {...state, user: action.fetch.user,
                carrito: action.fetch.carrito}
        default:
            return state;
    }
}