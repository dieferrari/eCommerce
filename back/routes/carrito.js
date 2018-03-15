const express = require('express');
const router = express.Router();
const passport = require('passport');
const {User, Carrito, Product} = require('../models');


router.put('/',function(req,res,next){
    if(req.user){
        User.findById(req.user.id)
        .then(user=> {
            return user.setProducts([]).then(() => user)
        })
        .then((user) => {
            console.log("OOOOOOOOOOOOOO",req.user)
            const carrito=req.body.carrito.map(producto=>{
                return user.addProducts(producto.id,{through:{cantidad:producto.carrito.cantidad}})
            })//arme carrito
            return Promise.all(carrito)
        })
        .then(() => {
            return User.findById(req.user.id,{
                include: [{
                    model: Product,
                    attributes:['id','name','description', 'price'],
                    through: {
                        attributes:['cantidad'],
                    }
                }]
            })
        })
        .then((user) => {
            res.send(user)
        })
    }
})

module.exports=router;