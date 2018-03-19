const express = require('express');
const router = express.Router();
const passport = require('passport');
const {User, Carrito, Product} = require('../models');
const { updateCarrito } = require('../utils/carrito')

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.sendStatus(403);
    }
}

router.post('/',isLoggedIn,function(req,res,next){
        User.findById(req.user.id,{
            include: [{
                model: Product,
                attributes:['id','name','description', 'price'],
                through: {
                    attributes:['cantidad'],
                }
            }]
        })
        .then(user=> {
           const cart = updateCarrito(user.products,req.body)
            user.setProducts(cart)
            .then((prods) => res.send(user))
        })
    })
     

router.delete('/:id',isLoggedIn,function(req,res,next){
    User.findById(req.user.id)
        .then(user => {
            return user.removeProducts(req.params.id)
        })
        .then(() => {
            return User.findById(req.user.id,{
                include: [{
                    model: Product,
                    attributes:['id','name','description','stock' , 'price'],
                    through: {
                        attributes:['cantidad'],
                    }
                }]
            })
        })
        .then((user) => {
            res.send(user)
        })
})
router.put('/',isLoggedIn,function(req,res,next){
    User.findById(req.user.id)
        .then((user) => {
            return user.removeProducts([req.body.id])
            .then(() => {
                return user.addProducts(req.body.id,{through:{cantidad:req.body.cantidad}})
            })
        })
        .then(() => {
            return User.findById(req.user.id,{
                include: [{
                    model: Product,
                    attributes:['id','name','description','stock' , 'price'],
                    through: {
                        attributes:['cantidad'],
                    }
                }]
            })
        })
        .then((user) => {
            res.send(user)
        })
})

module.exports=router;