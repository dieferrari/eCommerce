import axios from 'axios';
import { RECEIVE_ALL_USER } from '../constants';

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USER,
    users:users
  });

  export const fetchAllUsers = () => dispatch => 
  axios.get(`http://localhost:3005/users`)
  .then(res => res.data)
  .then(users => {
    dispatch(receiveAllUsers(users))});


  export const editUser = (id,body) => dispatch => 
  axios.put(`http://localhost:3005/users/${id}`,body)
  .then(res => res.data)
  .then(users => {
    dispatch(receiveAllUsers(users))});
    
  export const deleteUser = (id) => dispatch => 
  axios.delete(`http://localhost:3005/users/${id}`)
  .then(res => res.data)
  .then(users => {
    dispatch(receiveAllUsers(users))});