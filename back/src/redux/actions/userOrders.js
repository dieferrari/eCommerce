import axios from 'axios';
import { RECEIVE_USER_ORDERS } from '../constants';

const receiveUserOrders = (userOrders) => ({
  type: RECEIVE_USER_ORDERS,
  userOrders,
});

export const fetchUserOrders = userId => dispatch =>
  axios.get(`/api/users/${userId}/orders`)
    .then(res => res.data)
    .then(userOrders => {
      console.log('YYYYYYYYYYY',userOrders)
      dispatch(receiveUserOrders(userOrders))});