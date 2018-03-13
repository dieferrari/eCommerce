import { RECEIVE_SINGLE_CATEGORY} from '../constants';

const initialState = {
  category: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    
    case RECEIVE_SINGLE_CATEGORY:
      return action.category

    default:
      return state;
  }
}