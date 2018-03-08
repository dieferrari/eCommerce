const {User, Categories, Product, Reviews} =require('../models');
const productos=require('./products-seed');
const usuarios=require('./user-seed');
const categorias=require('./categories-seed');
const reviews=require('./reviews-seed');


module.exports=function(){
    Product.bulkCreate(productos).then(()=>{
        return Categories.bulkCreate(categorias)
    }).then(()=>{
        return  User.bulkCreate(usuarios)
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
        return User.findById(2)
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