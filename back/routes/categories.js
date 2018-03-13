const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const Categories = require('../models/categories');

router.get('/', function (req, res, next) {
    Categories.findAll({ include: [ Product ] })
        .then((categories) => res.status(200).send(categories))
})

router.post('/', function (req, res, next) {
    Categories.create(req.body)
    .then(()=>Categories.findAll({ include: [ Product ]}))
    .then(categories => res.status(200).send(categories))
    .catch((err) => res.send(err))
})

router.get('/:id',function(req,res,next){
    Categories.findById(req.params.id,{include: [ Product ]})
        .then((categorie) => res.status(200).send(categorie))
        .catch((err) => res.send(err))
})
router.put('/:id',function(req,res,next){
    Categories.findById(req.params.id)
    .then((categoria)=>{
        return categoria.update(req.body)
        .then(()=>Categories.findAll({ include: [ Product ] }))
    })
    .then(categories => res.status(200).send(categories))
    .catch((err) => res.send(err))
    
})
router.delete('/:id',function(req,res,next){
   Categories.destroy({where:{id:req.params.id}})
   .then(()=>Categories.findAll({ include: [ Product ] }))
   .then(categories => res.status(200).send(categories))
   .catch((err) => res.send(err))
})


module.exports=router;