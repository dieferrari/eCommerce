import axios from 'axios';
import { SET_USER } from '../constants';
import { RECEIVE_USER } from '../constants';


const registerUser = (user,carrito) => ({
    type: SET_USER,
    fetch:{
      user:user,
      carrito:carrito
    }
  });//devuelve un user pero carritos y orders con listas vacias

  const receiveUser = (user,carrito) => ({
    type: RECEIVE_USER,
    fetch:{
      user:user,
      carrito:carrito
    }
  });

export const createUser = user => dispatch =>{
  axios.post(`http://localhost:3005/users/register`, user)
  .then(res => {
   return res.data})
  .then(user => {
    dispatch(registerUser({id:user.id,
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email},[]))})};

export const fetchUser = id => dispatch => 
  axios.get(`http://localhost:3005/users/${id}`)
  .then(res => res.data)
  .then(user => {
    dispatch(receiveUser({id:user.id,
      firstName:user.firstName, 
      lastName:user.lastName,
      email:user.email},user.products))});
