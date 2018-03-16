import axios from 'axios';
import { RECEIVE_USER_ORDERS } from '../constants';

const receiveUserOrders = (userOrders) => ({
  type: RECEIVE_USER_ORDERS,
  userOrders,
});

export const fetchUserOrders = () => dispatch =>
  axios.get(`/api/users/orders`)
    .then(res => res.data)
    .then(userOrders => {
      console.log('YYYYYYYYYYY',userOrders)
      dispatch(receiveUserOrders(userOrders))});