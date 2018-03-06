import axios from 'axios';
import { RECEIVE_CATEGORIES } from '../constants';

const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const fetchCategories = () => dispatch =>
  axios.get('/')
    .then(res => res.data)
    .then(categories => dispatch(receiveCategories(categories)));