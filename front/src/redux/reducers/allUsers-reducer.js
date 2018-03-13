import { RECEIVE_ALL_USER} from '../constants.js';

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_ALL_USER:
            return action.users
        default:
            return state;
    }
}