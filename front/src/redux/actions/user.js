import axios from 'axios';
import { SET_USER } from '../constants';

const receiveUser = (user) => ({
    type: SET_USER,
    user,
  });

<<<<<<< HEAD
export const createUser = user => dispatch =>
  axios.post(`localhost:3005/register`, user)
=======
export const createUser = user => dispatch => axios
    .post(`http://localhost:3005/users/register`, user)
>>>>>>> c551ff7eeb0e4f59346f0b7581f8c6bd68bf5a06
    .then(res => res.data)
    .then(createdUser => {
      dispatch(receiveUser(createdUser))});