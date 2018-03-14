const express = require('express');
const router = express.Router();
const passport = require('passport');
const {User, Orders, Product, OrdersProducts} = require('../models');
const enviar = require('../utils')

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
    //desarmo el body
    var orderId;//inicio orderId
    Orders.create({OwnerId:userId,
        OwnerDirection:userDirection,
        OwnerMail:userMail})
    .then((orden)=>{
        orderId=orden.id
       const productos=products.map(producto=>{
        return orden.addProduct(producto.id,{
             through: { cantidad: producto.cantidad }})})
        return Promise.all(productos)
    })
    .then(()=>User.findById(userId))
    .then(usuario=>usuario.setProducts([]))
    .then(()=>{
        enviar.enviarCheckoutEmail(userMail,orderId)
    })
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
//comprobado funciona
router.put('/:id',function(req,res,next){
    Orders.findById(req.params.id)
    .then((orden)=>orden.update(req.body))
    .then((orden)=>{
        if(req.body.status=='procesando'){
            enviar.enviarProcesandoEmail(orden.OwnerMail,orden.id,orden.OwnerDirection)
        }
        if(req.body.status=='completado'){
            enviar.enviarCompletoEmail(orden.OwnerMail,orden.id)
        }
    })
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