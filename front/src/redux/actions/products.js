import axios from 'axios'
import {RECEIVE_PRODUCTS} from '../constants'

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products,
  });

export const fetchProducts = () => dispatch =>
axios({
  method:'get',
  url:'http://localhost:3005/products',
  withCredentials: true
}).then(res => res.data)
  .then(products => {
  console.log(products)
  dispatch(receiveProducts(products))});