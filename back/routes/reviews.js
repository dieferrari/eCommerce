const express = require('express');
const router = express.Router();
const {Reviews,User,Product, Categories}= require('../models')

//trae todos los reviews de un usuario y a que productos fue hecho fue hecho
router.get('/user/:id',function(req,res,net){
    Reviews.findAll({
    attributes:['id','text','rate'],
    where:{AuthorId:req.params.id},
    include: [
        {
        model: Product,
        as:'Product',
        attributes:['id','name'],
    }]
})
    .then(reviews=>res.status(200).send(reviews))
    .catch((err) => res.send(err))
})
//HOLIS GURÚ
router.post('/', function (req, res, next) {
    console.log('BODYYY',req.body)
//ojo que el body traiga Author y Product con mayusculas ura
    Reviews.create(req.body)
    .then(()=>{
        return Product.findById(req.body.ProductId,{
            include: [{
                model: Categories,
                attributes:['id','name'],
                through: {
                    attributes:[],
                }
            },{
                model: Reviews,
                as:'reviews',
                attributes:['id','rate','text'],
                include:[{
                    model:User,
                    as:'Author',
                    attributes:['id','firstName','lastName']
                }]
        }]//include 
        })
    })
    .then(product=> res.send(product))
    .catch((err) => res.send(err))
})



module.exports=router;