import axios from 'axios'
import {RECEIVE_PRODUCTS} from '../constants'

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products,
  });

export const fetchProducts = () => dispatch =>
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
