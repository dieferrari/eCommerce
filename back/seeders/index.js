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
        return Orders.findById(101)
    })
    .then(order=>{
        return order.addProducts([102],{ through: { cantidad: 6 }})
    }).then(()=>{
        return Product.findById(101)
    })
    .then(producto=>{
        return producto.addCategories([105])
    }).then(()=>{
        return Product.findById(102)
    })
    .then(producto=>{
        return producto.addCategories([105])
    }).then(()=>{
        return Product.findById(103)
    })
    .then(producto=>{
        return producto.addCategories([105])
    })
    .then(()=>{
        return Product.findById(104)
    })
    .then(producto=>{
        return producto.addCategories([105])
    }).then(()=>{
        return User.findById(102)
    }).then(usuario=>{
        return usuario.addProducts([101,102,103])
    }).then(()=>{
        return Reviews.bulkCreate(reviews)
    }).then(()=>{
        console.log("PiNgO")
    })
}
