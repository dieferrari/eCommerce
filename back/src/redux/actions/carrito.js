import {ADD_LOCAL_CARRITO} from '../constants.js';

const setCarrito = (products) => ({
    type: ADD_LOCAL_CARRITO,
    products,
});

// export const addCarrito = (product) => dispatch => {
    
//     if(!localStorage.getItem('localCarrito')){
//         var cart = []
//         cart.push(product)
//         var productString = JSON.stringify(cart)
//         var a =localStorage.setItem('localCarrito', productString)
//         dispatch(setCarrito(a))

//     }else{
//         var cart = [JSON.parse(localStorage.getItem('localCarrito'))]
//         cart.push(product)
//         var productString = JSON.stringify(cart)
//         var a =localStorage.setItem('localCarrito', productString)
//         dispatch(setCarrito(a))
//     }
// }


export const addCarrito = (product) => dispatch => {
    var cart = [product];
    var stringFromStorage = localStorage.getItem('localCarrito');   
    var cartFromStorage = JSON.parse(stringFromStorage);
    if (cartFromStorage) {
        cart = [...cartFromStorage, product];
    }
    
    localStorage.setItem('localCarrito', JSON.stringify(cart));
    dispatch(setCarrito(cart));
}
//Nico, soy el niño de cobre, ya te queda en el local storage lo que compras, ahora hay que comprobar que lo que pida no
// supere el stock disponible..... Y hacer que cuando el loco/a(#niUnaMenos) se logee, le agregue ese cart a su State.
//Sugar Crush