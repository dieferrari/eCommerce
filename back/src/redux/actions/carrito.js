import {ADD_LOCAL_CARRITO,RECEIVE_USER} from '../constants.js';

// const setCarrito = (products) => ({
//     type: ADD_LOCAL_CARRITO,
//     products,
// });
const actualizarCarrito = (user,products) => ({
    type:RECEIVE_USER,
    fetch:{
        user,
        carrito:products
    }
})

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
export const updateCarrito = (products) => dispatch =>{
    axios.put(`/api/carrito`,products)
    .then(data => res.data)
    .then((user) => {
        console.log(user)
        dispatch(actualizarCarrito({
            id:user.id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email
        },user.products))
    })
}
//Nico, soy el niño de cobre, ya te queda en el local storage lo que compras, ahora hay que comprobar que lo que pida no
// supere el stock disponible..... Y hacer que cuando el loco/a(#niUnaMenos) se logee, le agregue ese cart a su State.
//Sugar Crush