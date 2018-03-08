const express = require('express');
const router = express.Router();
const { Categories, Product, Reviews } = require('../models/');

router.get('/', function (req, res, next) {
    Product.findAll({ include: [ Categories, Reviews] })
        .then((products) => res.status(200).send(products))
})
router.post('/',function(req,res,next){
    Product.create(req.body)
        .then((product) => res.status(201).send(product))
})
router.get('/:id',function(req,res,next){
    Product.findById(req.params.id,{
        include: [Categories, Reviews]
    })
        .then((product) => res.status(200).send(product))
        .catch((err) => res.send(err))
})
module.exports=router;