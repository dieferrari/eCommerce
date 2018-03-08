import axios from 'axios';
import { RECEIVE_SINGLE_PRODUCT } from '../constants';

const receiveSingleProduct = (product) => ({
  type: RECEIVE_SINGLE_PRODUCT,
  product,
});

export const fetchSingleProduct = id => dispatch =>
  axios.get(`http://localhost:3005/products/${id}`)
    .then(res => res.data)
    .then(product => {
      console.log('product',product)
      dispatch(receiveSingleProduct(product))});