import {ADD_LOCAL_CARRITO} from '../constants.js';

// const setCarrito = (products) => ({
//     type: ADD_LOCAL_CARRITO,
//     products,
// });

export const addCarrito = (product) => dispatch => {
    var cart = [product];
    var stringFromStorage = localStorage.getItem('localCarrito');   
    var cartFromStorage = JSON.parse(stringFromStorage);
    if(cartFromStorage){
        cartFromStorage.map(localProduct => {
            if(localProduct.id == product.id){
                localProduct.cantidad = localProduct.cantidad + product.cantidad
                cart = [...cartFromStorage]
            }
        })
    }

    // if (cartFromStorage && cartFromStorage.id == product.id) {
    // }
    // else if(cartFromStorage){
        // cart = [...cartFromStorage, product];
    // }
    
    localStorage.setItem('localCarrito', JSON.stringify(cart));
    // dispatch(setCarrito(cart));
}
//Nico, soy el niño de cobre, ya te queda en el local storage lo que compras, ahora hay que comprobar que lo que pida no
// supere el stock disponible..... Y hacer que cuando el loco/a(#niUnaMenos) se logee, le agregue ese cart a su State.
//Sugar Crush