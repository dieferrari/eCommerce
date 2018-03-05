import { SET_USER } from '../constants.js';
const initialState = {
    user: {},
    login: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.user, login: true}
        default:
            return {...state};
    }
}