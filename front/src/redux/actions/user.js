import axios from 'axios';
import { SET_USER } from '../constants';

const receiveUser = (user) => ({
    type: SET_USER,
    user: user,
  });

export const createUser = user => dispatch =>
  axios.post(`localhost:3005/register`, user)
    .then(res => res.data)
    .then(createdUser => dispatch(receiveUser(createdUser)));