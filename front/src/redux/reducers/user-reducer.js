import { RECEIVE_USER,DESLOG_USER, FOUND_USER, SET_USER, FETCH_POST, FETCH_EDIT } from '../constants';
const initialState = {
    user: {},
    review: [],
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
        case FETCH_POST:
            return {...state, review: state.review.concat([action.fetch.review])}
        case FETCH_EDIT:
            return {...state, review:action.fetch}
        default:
            return state;
    }
}