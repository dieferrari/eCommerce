import axios from 'axios'
import {RECEIVE_ORDERS} from '../constants'

const receiveOrders = (orders) => ({
    type: RECEIVE_ORDERS,
    orders:orders,
  });

  export const fetchOrders = () => dispatch =>
  axios.get('/api/orders')
    .then(res => res.data)
    .then(orders=> {
      dispatch(receiveOrders(orders))});

//PARA CREAR EL CHECKOUT
/* EJEMPLO body={
    userId:103,
    products:[{id:101,cantidad:2},{id:104,cantidad:4},{id:103,cantidad:3}]
}*/
export const postOrders = (body) => dispatch =>
  axios.post('/api/orders',body)
    .then(res => res.data)
    .then(orders => {
      console.log('le pega')
      dispatch(receiveOrders(orders))});

/* EJEMPLO body={
    status:algo
}*/
export const editOrders = (id,body) => dispatch =>
  axios.put(`/api/orders/${id}`,body)
    .then(res => res.data)
    .then(orders => {
      dispatch(receiveOrders(orders))});


