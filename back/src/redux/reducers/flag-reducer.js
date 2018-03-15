import { FOUND_USER } from '../constants';
const initialState = false

export default (state = initialState, action) => {
    switch (action.type) {
        case FOUND_USER:
            return action.flag
        default:
            return state;
    }
}