import { LOADING } from '../constants';

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
      case LOADING:
          return !state
      default:
          return state
  }
}