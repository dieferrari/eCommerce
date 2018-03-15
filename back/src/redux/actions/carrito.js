//import {ADD_LOCAL_CARRITO, EDIT_LOCAL_CARRITO} from '../constants.js';

// const setCarrito = (products) => ({
//     type: ADD_LOCAL_CARRITO,
//     products,
// });

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


//Nico, soy el niño de cobre, ya te queda en el local storage lo que compras, ahora hay que comprobar que lo que pida no
// supere el stock disponible..... Y hacer que cuando el loco/a(#niUnaMenos) se logee, le agregue ese cart a su State.
//Sugar Crush

