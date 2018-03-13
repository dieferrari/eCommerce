import axios from 'axios'
import {RECEIVE_ORDERS} from '../constants'

const receiveOrders = (orders) => ({
    type: RECEIVE_ORDERS,
    orders:orders,
  });

  export const fetchOrders = () => dispatch =>
  axios.get('http://localhost:3005/orders')
    .then(res => res.data)
    .then(orders=> {
      dispatch(receiveOrders(orders))});

//PARA CREAR EL CHECKOUT
/* EJEMPLO body={
    userId:103,
    products:[{id:101,cantidad:2},{id:104,cantidad:4},{id:103,cantidad:3}]
}*/
export const postOrders = (body) => dispatch =>
  axios.post('http://localhost:3005/orders',body)
    .then(res => res.data)
    .then(orders => {
      dispatch(receiveOrders(orders))});

/* EJEMPLO body={
    status:algo
}*/
export const editOrders = (id,body) => dispatch =>
  axios.put(`http://localhost:3005/orders/${id}`,body)
    .then(res => res.data)
    .then(orders => {
      dispatch(receiveOrders(orders))});


