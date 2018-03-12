import axios from 'axios';
import { RECEIVE_CATEGORIES } from '../constants';

const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories,
});


export const fetchCategories = () => dispatch =>
  axios.get('http://localhost:3005/categories')
  .then(res => res.data)
  .then(categories => {
    dispatch(receiveCategories(categories)
    )
});

export const postCategories = (category) => dispatch =>
  axios.post('http://localhost:3005/categories',category)
  .then(res => res.data)
  .then(categories => {
    dispatch(receiveCategories(categories)
    )
});

export const editCategories = (id,category) => dispatch =>
  axios.put(`http://localhost:3005/categories/${id}`,category)
  .then(res => res.data)
  .then(categories => {
    dispatch(receiveCategories(categories)
    )
});

export const deleteCategories = (id) => dispatch =>
  axios.delete(`http://localhost:3005/categories/${id}`)
  .then(res => res.data)
  .then(categories => {
    dispatch(receiveCategories(categories)
    )
});






  