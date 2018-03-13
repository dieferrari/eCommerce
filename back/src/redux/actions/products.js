import axios from 'axios'
import {RECEIVE_PRODUCTS} from '../constants'

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products,
  });

export const fetchProducts = () => dispatch =>
  axios.get('/api/products')
    .then(res => res.data)
    .then(products => {
      dispatch(receiveProducts(products))});

export const postProducts = (body) => dispatch =>
  axios.post('/api/products',body)
    .then(res => res.data)
    .then(products => {
      dispatch(receiveProducts(products))});

export const editProducts = (id,body) => dispatch =>
  axios.put(`/api/products/${id}`,body)
    .then(res => res.data)
    .then(products => {
      dispatch(receiveProducts(products))});

export const deleteProducts = (id) => dispatch =>
  axios.delete(`/api/products/${id}`)
    .then(res => res.data)
    .then(products => {
      dispatch(receiveProducts(products))});
