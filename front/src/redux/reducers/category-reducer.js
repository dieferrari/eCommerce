import { RECEIVE_CATEGORIES } from '../constants';

const initialState = {
  category: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return {...state, category: action.categories};
    default:
      return state;
  }
}