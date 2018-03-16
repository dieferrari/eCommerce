const { Product, Carrito } = require('../models')

const updateCarrito = (cart,newProds) => {
    newProds.forEach((prod) => {
        var FindProd = cart.find((element) => element.id === prod.id)
        if(!FindProd){
            product = Product.build(prod)
            product.setDataValue('carrito', { cantidad : prod.carrito.cantidad })
            console.log(product)
            cart.push(product)
        }else{
           FindProd.setDataValue('carrito', { cantidad: prod.carrito.cantidad }) 
        }
    })
    return cart
}
module.exports = {updateCarrito};