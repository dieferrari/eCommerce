import axios from 'axios';
import { RECEIVE_CATEGORIES } from '../constants';

const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories,
});


export const fetchCategories = () => dispatch =>
  axios.get('/api/categories')
  .then(res => res.data)
  .then(categories => {
    dispatch(receiveCategories(categories)
    )
});

export const postCategories = (category) => dispatch =>
  axios.post('/api/categories',category)
  .then(res => res.data)
  .then(categories => {
    dispatch(receiveCategories(categories)
    )
});

export const editCategories = (id,category) => dispatch =>
  axios.put(`/api/categories/${id}`,category)
  .then(res => res.data)
  .then(categories => {
    dispatch(receiveCategories(categories)
    )
});

export const deleteCategories = (id) => dispatch =>
  axios.delete(`/api/categories/${id}`)
  .then(res => res.data)
  .then(categories => {
    dispatch(receiveCategories(categories)
    )
});






  