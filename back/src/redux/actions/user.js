import axios from 'axios';
import { SET_USER } from '../constants';
import { RECEIVE_USER } from '../constants';
import { FOUND_USER } from '../constants';
import { DESLOG_USER } from '../constants';

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
  const loginUser = (flag) => ({
    type: FOUND_USER,
    flag
  })
  const deslogearUser = (user) => ({
    type: DESLOG_USER
  })

export const createUser = user => dispatch =>{
  axios.post(`/api/users/register`, user)
  .then(res => {
   return res.data})
  .then(user => {
    dispatch(registerUser({id:user.id,
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email},[]))})};

export const fetchUser = id => dispatch => 
  axios.get(`/api/users/${id}`)
  .then(res => res.data)
  .then(user => {
    dispatch(receiveUser({id:user.id,
      firstName:user.firstName, 
      lastName:user.lastName,
      email:user.email},user.products))
      return user
    });

export const loggedUser = user => dispatch => {
  axios.post(`/api/users/login`,user)
  .then(res => res.data)
  .then(respuesta => {
   dispatch(receiveUser({id:user.id,
    firstName:user.firstName, 
    lastName:user.lastName,
    email:user.email},[]))
  })
}
export const Userlogged = () => dispatch => {axios
  .get(`/api/users/userislogin`)
  .then(res => res.data)
  .then(user => {
    dispatch(receiveUser({id:user.id,
      firstName:user.firstName, 
      lastName:user.lastName,
      email:user.email},user.products))
  })
}
export const deslogUser = () => dispatch => axios
  .get(`/api/users/logout`)
  .then(res => res.data)
  .then(user =>{
    dispatch(deslogearUser())
  })
