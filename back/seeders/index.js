const {User, Categories, Product} =require('../models');
const productos=require('./products-seed');
const usuarios=require('./user-seed');
const categorias=require('./categories-seed')




module.exports=function(){
    Product.bulkCreate(productos).then(()=>{
        return Categories.bulkCreate(categorias)
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
        console.log('Tomi TermiChapo')
    })
}

// .then(()=>{
//     return  User.bulkCreate(usuarios)
// })

// .then(()=>{
//     return User.findById(2)
// }).then(usuario=>{
//     return usuario.addProducts([1,2,3])
// })