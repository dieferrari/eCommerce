import axios from 'axios';
import { RECEIVE_SINGLE_PRODUCT } from '../constants';

const receiveSingleProduct = (product) => ({
  type: RECEIVE_SINGLE_PRODUCT,
  product,
});

export const fetchSingleProduct = id => dispatch =>
  axios.get(`/api/products/${id}`)
    .then(res => res.data)
    .then(product => {
      console.log('product',product)
      dispatch(receiveSingleProduct(product))});

export const addProductReview = (ProductId, values, user) => dispatch => {
  axios
  .post(`/api/reviews`, {...values, AuthorId: user, ProductId })
  // body {text,rate,AuthorId,ProductId}
  .then(res => res.data)
  .then(product => {
    dispatch(receiveSingleProduct(product))
  })
}