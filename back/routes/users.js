const express = require('express');
const router = express.Router();
const passport = require('passport');
const {User, Orders, Product, OrdersProducts} = require('../models');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.sendStatus(403);
    }
}

router.get('/', function (req, res, next) {
    User.findAll()
        .then((users) => res.status(200).send(users))
})
router.get('/userislogin',function(req,res,next){
    User.findById(req.user.id,{
        include: [{
            model: Product,
            attributes:['id','name','description', 'price'],
            through: {
                attributes:['cantidad'],
            }
        }]
    })
    .then((user) => {
       res.send(user)
    })
    .catch(err => {
        res.send(err)
    });
})
router.post('/register', function (req, res, next) {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password:req.body.password,
    })
    .then((user) => {
        console.log(user)
            res.send(user);
    })
    .catch((err) => {
        console.log('ERROR', err)
        res.send(err)
    })
})
router.post('/login',passport.authenticate('local'),function (req, res) {
    User.findById(req.user.id,{
        include: [{
            model: Product,
            attributes:['id','name','description', 'price'],
            through: {
                attributes:['cantidad'],
            }
        }]
    })
    .then((user) => {
       res.send(user)
    })
    .catch(err => {
        res.send(err)
    });
});
router.delete('/delete/:userId', function (req, res, next) {
    User.destroy({
            where:{id: req.params.userId}
        })
        .then((user) => res.send(user))
        .catch((err) => res.send(err))
})
router.get('/logout', function(req, res){
    req.logout()
    res.sendStatus(200);
});
router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',passport.authenticate('facebook'),function(req,res){
    console.log(req.user)
    res.status(200).send(req.user)
});
router.get('/auth/google',
  passport.authenticate('google', 
  { scope: ['https://www.googleapis.com/auth/plus.login'] }
))
router.get('/auth/google/callback', 
  passport.authenticate('google'),
  function(req, res) {
      console.log(req.user)
    res.status(200).send(req.user);
  });
router.get('/:userId/orders', function(req, res){
    Orders.findAll({    
        where: {
            OwnerId: req.params.userId,
        },
        include: [{
            model: Product,
            attributes:['id','name','description', 'price', 'imgURL'],
            through: {
                attributes:['cantidad'],
            }
        }]
    }).then(orders => {
        res.send(orders)
    })
})
router.get('/:userId', function (req, res) {
    User.findById(req.params.userId,{
        include: [{
            model: Product,
            attributes:['id','name','description', 'price'],
            through: {
                attributes:['cantidad'],
            }
        }]
    })
    .then((user) => {
            res.send(user)
    })
    .catch(err => res.send(err));
});

//body={isAdmin:boolean}
router.put('/:userId', function (req, res) {
    User.findById(req.params.userId)
    .then(usuario=>usuario.update(req.body))
    .then(()=>User.findAll())
    .then((users) => res.status(200).send(users))
    .catch(err=>res.send(err))
});
//comprobadoo
router.delete('/:userId', function (req, res) {
    User.destroy({where:{id:req.params.userId}})
    .then(()=>User.findAll())
    .then((users) => res.status(200).send(users))
    .catch(err=>res.send(err))
});

module.exports = router;