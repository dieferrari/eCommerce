import axios from 'axios';
import { RECEIVE_SINGLE_CATEGORY } from '../constants';

const receiveSingleCategory = (category) => ({
  type: RECEIVE_SINGLE_CATEGORY,
  category,
});

export const fetchSingleCategory = id => dispatch =>
  axios.get(`http://localhost:3005/products/${id}`)
  .then(res => res.data)
  .then(category => {
    dispatch(receiveSingleCategory(category)
    )
});
