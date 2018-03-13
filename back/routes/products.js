const express = require('express');
const router = express.Router();
const { Categories, Product, Reviews, User } = require('../models/');

function isLoggedIn(req, res, next) {
    console.log('SESSION', req.session)
    console.log('COOKIES', req.cookies)
    console.log('USER', req.user)
    console.log('AUTH', req.isAuthenticated())
    if (req.isAuthenticated()) {
      next()
    } else {
        console.log('YOU NEED TO LOG IN')
      res.sendStatus(403);
    }
}

router.get('/', function (req, res, next) {
    Product.findAll({ include: [{
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
}]})
        .then((products) => res.status(200).send(products))
})
router.post('/',function(req,res,next){
    Product.create(req.body)
        .then((product) => res.status(201).send(product))
})


router.post('/:id/review', function (req, res, next) {
    console.log('BODYYYY',req.body)
    // console.log('REQ', req.user)
    Reviews.create({...req.body, ProductId: req.params.id})
    .then(review=>res.status(200).send(review))
    .catch((err) => res.send(err))
})


router.get('/:id',function(req,res,next){
    Product.findById(req.params.id,{
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
        .then((product) => res.status(200).send(product))
        .catch((err) => res.send(err))
})
module.exports=router;