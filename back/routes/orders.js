const express = require('express');
const router = express.Router();
const passport = require('passport');
const {User, Orders, Product, OrdersProducts} = require('../models');


router.get('/', function (req, res, next) {
    Orders.findAll({    
        include: [{
            model: Product,
            attributes:['id','name', 'price', 'imgURL'],
            through: {
                attributes:['cantidad'],
            }
        }]
    }).then(orders => {
        res.send(orders)
    })
})
//como se crean ordenes?
//el body es
//{userid,products[{id,cantidad}]}

router.post('/', function (req, res, next) {
    
    const{userId,products}=req.body
    Orders.create({OwnerId:userId})
    .then((orden)=>{
        products.forEach(prod=>{
            orden.addProduct(prod.id,{ through: { cantidad: 1 }})
        })
    })
    .then(()=>Orders.findAll({    
        include: [{
            model: Product,
            attributes:['id','name', 'price', 'imgURL'],
            through: {
                attributes:['cantidad'],
            }
        }]
    }))
    .then(orders => {
        res.send(orders)
    }).catch(err=>res.send(err))
})

router.put('/:id',function(req,res,next){
    Orders.findById(req.params.id)
    
})


module.exports=router