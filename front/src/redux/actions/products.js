import axios from 'axios'
import {RECEIVE_PRODUCTS} from '../constants'

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products,
  });

export const fetchProducts = () => dispatch =>
  axios.get('localhost:3005/products')
    .then(res => res.data)
    .then(products => dispatch(receiveProducts(products)));