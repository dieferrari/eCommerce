import axios from 'axios'
import {RECEIVE_PRODUCTS} from '../constants'

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products,
  });

export const fetchProducts = () => dispatch =>
<<<<<<< HEAD
axios({
  method:'get',
  url:'http://localhost:3005/products',
  withCredentials: true
}).then(res => res.data)
  .then(products => {
  console.log(products)
  dispatch(receiveProducts(products))});
=======
  axios.get('http://localhost:3005/products')
    .then(res => res.data)
    .then(products => {
      dispatch(receiveProducts(products))});

export const postProducts = (body) => dispatch =>
  axios.post('http://localhost:3005/products',body)
    .then(res => res.data)
    .then(products => {
      dispatch(receiveProducts(products))});

export const editProducts = (id,body) => dispatch =>
  axios.put(`http://localhost:3005/products/${id}`,body)
    .then(res => res.data)
    .then(products => {
      dispatch(receiveProducts(products))});

export const deleteProducts = (id) => dispatch =>
  axios.delete(`http://localhost:3005/products/${id}`)
    .then(res => res.data)
    .then(products => {
      dispatch(receiveProducts(products))});
>>>>>>> f2d4b63f65fcdd774b6e9ee1689ef948c6b103ae
