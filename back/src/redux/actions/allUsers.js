import axios from 'axios';
import { RECEIVE_ALL_USER } from '../constants';

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USER,
    users:users
  });

  export const fetchAllUsers = () => dispatch => 
  axios.get(`/api/users`)
  .then(res => res.data)
  .then(users => {
    dispatch(receiveAllUsers(users))});


  export const editUser = (id,body) => dispatch => 
  axios.put(`/api/users/${id}`,body)
  .then(res => res.data)
  .then(users => {
    dispatch(receiveAllUsers(users))});
    
  export const deleteUser = (id) => dispatch => 
  axios.delete(`/api/users/${id}`)
  .then(res => res.data)
  .then(users => {
    dispatch(receiveAllUsers(users))});