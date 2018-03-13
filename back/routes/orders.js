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
        },{model:User,
        as:'Owner',
       attributes:['id','fullName','firstName','lastName', 'email']
    }]
    }).then(orders => {
        res.send(orders)
    })
})
//como se crean ordenes?
/* req.body={
    userId:104,
    userDirection:''
    userMail:''
    products:[{id:101,cantidad:2},{id:104,cantidad:4},{id:103,cantidad:3}]
}*/

router.post('/', function (req, res, next) {
    const {userId,
        userMail,
        userDirection,
        products}=req.body
    Orders.create({OwnerId:userId,
        OwnerDirection:userDirection,
        OwnerMail:userMail})
    .then((orden)=>{
       const productos=products.map(producto=>{
        return orden.addProduct(producto.id,{
             through: { cantidad: producto.cantidad }})})
        return Promise.all(productos)
    })
    .then(()=>User.findById(userId))
    .then(usuario=>usuario.setProducts([]))
    .then(()=>Orders.findAll({    
        include: [{
            model: Product,
            attributes:['id','name', 'price', 'imgURL'],
            through: {
                attributes:['cantidad'],
            }
        },{model:User,
        as:'Owner',
       attributes:['id','fullName','firstName','lastName', 'email']
    }]
    }))
    .then(orders => {
        res.send(orders)
    }).catch(err=>res.send(err))
})
//req.body={status:algo}
router.put('/:id',function(req,res,next){
    Orders.findById(req.params.id)
    .then((orden)=>orden.update(req.body))
    .then(()=>Orders.findAll({    
        include: [{
            model: Product,
            attributes:['id','name', 'price', 'imgURL'],
            through: {
                attributes:['cantidad'],
            }
        },{model:User,
        as:'Owner',
       attributes:['id','fullName','firstName','lastName', 'email']
    }]
    }))
    .then(orders => {
        res.send(orders)
    }).catch(err=>res.send(err))
    
})


module.exports=router