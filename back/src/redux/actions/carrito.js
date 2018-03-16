//import {ADD_LOCAL_CARRITO, EDIT_LOCAL_CARRITO} from '../constants.js';

// const setCarrito = (products) => ({
//     type: ADD_LOCAL_CARRITO,
//     products,
// });
import axios from 'axios';
import { RECEIVE_USER } from '../constants';

const receiveUser = (user,carrito) => ({
    type: RECEIVE_USER,
    fetch:{
      user:user,
      carrito:carrito
    }
  });


export const addCarrito = (product) => dispatch => {
    var cart = [product];
    var stringFromStorage = localStorage.getItem('localCarrito');   
    var cartFromStorage = JSON.parse(stringFromStorage);
    var updatedQty = false;
    if(cartFromStorage){
        cart = cartFromStorage.map(localProduct => {
            if(localProduct.id == product.id){
                localProduct.cantidad = localProduct.cantidad + product.cantidad
                updatedQty = true;
            }
            return localProduct
        })
        console.log('CAAAAAAAAAAAAAAART', cart)
        if(!updatedQty){
            cart = [...cart, product]
        }
    }

    // if (cartFromStorage && cartFromStorage.id == product.id) {
    // }
    // else if(cartFromStorage){
        // cart = [...cartFromStorage, product];
    // }
    
    localStorage.setItem('localCarrito', JSON.stringify(cart));
    // dispatch(setCarrito(cart));
}

export const editCarrito = (value, index) => dispatch => {
    var stringFromStorage = localStorage.getItem('localCarrito');
    var cartFromStorage = JSON.parse(stringFromStorage);
    console.log("EDIIIIIIIIIIIIIIIIIIIIIIIT", cartFromStorage[index].cantidad)
    cartFromStorage[index].cantidad = value;
    localStorage.setItem('localCarrito', JSON.stringify(cartFromStorage))
}

export const removeCarrito = (index) => dispatch => {
    var stringFromStorage = localStorage.getItem('localCarrito');
    var cartFromStorage = JSON.parse(stringFromStorage);
    console.log("REMOOOOOOOOOOOOOOOOOOVE", cartFromStorage[index])
    cartFromStorage.splice(index,1);
    localStorage.setItem('localCarrito', JSON.stringify(cartFromStorage))
}
//Lc=[{prod-0},{prod-1}]
export const mergeCarritos = (Lc) => dispatch => {
    axios.post(`/api/carrito`, Lc)
    .then(res => {
        return res.data})
    .then(user => {
        dispatch(receiveUser({id:user.id,
        firstName:user.firstName, 
        lastName:user.lastName,
        isAdmin:user.isAdmin,
        email:user.email},user.products))
    })
}

export const editUserCarrito = (item) => dispatch => {
    axios.put(`/api/carrito`, item)
    .then(res => {
        return res.data})
    .then(user => {
        dispatch(receiveUser({id:user.id,
        firstName:user.firstName, 
        lastName:user.lastName,
        isAdmin:user.isAdmin,
        email:user.email},user.products))
    })
}

export const removeUserCarrito = (id) => dispatch => {
    axios.delete(`/api/carrito/${id}`)
    .then(res => {
     return res.data})
    .then(user => {
      dispatch(receiveUser({id:user.id,
        firstName:user.firstName, 
        lastName:user.lastName,
        isAdmin:user.isAdmin,
        email:user.email},user.products))
    })
}


//Nico, soy el niño de cobre, ya te queda en el local storage lo que compras, ahora hay que comprobar que lo que pida no
// supere el stock disponible..... Y hacer que cuando el loco/a(#niUnaMenos) se logee, le agregue ese cart a su State.
//Sugar Crush

