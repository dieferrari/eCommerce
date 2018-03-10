import { SET_USER, FOUND_USER} from '../constants.js';
import { RECEIVE_USER,DESLOG_USER } from '../constants';
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
        case FOUND_USER:
            return {...state, user: action.fetch.user,
                carrito: action.fetch.carrito}
        case DESLOG_USER:
            return {...state, user:{}}
        default:
            return state;
    }
}