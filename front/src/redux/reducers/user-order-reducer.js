import { RECEIVE_USER_ORDERS } from '../constants';


const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
      case RECEIVE_USER_ORDERS:
          return action.userOrders
      default:
          return state;
  }
}