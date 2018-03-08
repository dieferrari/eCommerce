const {User, Categories, Product, Orders, Reviews} =require('../models');
const productos=require('./products-seed');
const usuarios=require('./user-seed');
const categorias=require('./categories-seed');
const orders=require('./orders-seed.js');
const reviews=require('./reviews-seed');



module.exports=function(){
    Product.bulkCreate(productos).then(()=>{
        return Categories.bulkCreate(categorias)
    }).then(()=>{
        return  User.bulkCreate(usuarios)
    }).then(()=>{
        return  Orders.bulkCreate(orders)
    }).then(()=>{
        return Orders.findById(1)
    })
    .then(order=>{
        return order.addProducts([2],{ through: { cantidad: 6 }})
    }).then(()=>{
        return Product.findById(1)
    })
    .then(producto=>{
        return producto.addCategories([5])
    }).then(()=>{
        return Product.findById(2)
    })
    .then(producto=>{
        return producto.addCategories([5])
    }).then(()=>{
        return Product.findById(3)
    })
    .then(producto=>{
        return producto.addCategories([5])
    })
    .then(()=>{
        return Product.findById(4)
    })
    .then(producto=>{
        return producto.addCategories([5])
    }).then(()=>{
        return User.findById(2234)
    }).then(usuario=>{
        return usuario.addProducts([1,2,3])
    }).then(()=>{
        return Reviews.bulkCreate(reviews)
    }).then(()=> {
        return Product.findById(2)
    })
    .then((producto)=>{
        return producto.addReviews([1,3,5])
    }).then(()=>{
        console.log("PiNgO")
    })
}
