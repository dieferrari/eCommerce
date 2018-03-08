const express = require('express');
const router = express.Router();
const User = require('../models/users');
// const passport = require('passport');

router.get('/', function (req, res, next) {
    User.findAll()
        .then((users) => res.status(200).send(users))
})
router.param('userId', function (req, res, next, id) {
    User.findById(id)
        .then((user) => {
            if (!user) {
                res.sendStatus(404)
            }
            req.user = user;
            return next();
        })
        .catch(next);
})
// router.post('/register', function (req, res, next) {
//     User.create({
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         email: req.body.email,
//         password: req.body.password,
//     },function (err, user) {
//         if (err) {
//             res.send(err)
//         } else {
//             var authenticate = User.authenticate();
//             authenticate(req.body.email, req.body.password, function (err, result) {
//                 if (err) {
//                     res.send(err)
//                 } else {
//                     res.status(201).send({
//                         status: 201,
//                         data: {
//                             user: result
//                         },
//                         message: 'Success Register'
//                     })
//                 }
//             })
//         }
//     })
// })
router.post('/register',function(req,res,next){
    User.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    })
    .then((user) => {
        res.status(201).send(user)
        console.log(user.data)}
    )
    .catch(err => res.send(err))
})
router.post('/login',function(req,res,next){
    User.findOne({where:{
        email:req.body.email,
        password:req.body.password
    }
    })
    .then((user) => {
        if(!user){
            res.redirect('/users/failedLogin')
        }else{
            res.status(200).send({
                status:200,
                data:{
                    user
                },
                message:'Success Login'
            })
        }
    })
    .catch(err => res.send(err))
})
// router.post('/login', passport.authenticate('local', {
//     failureRedirect: '/users/failedLogin'
// }), function (req, res) {
//     res.status(200).send({
//         status: 200,
//         data: {
//             user: req.user
//         },
//         message: 'Success Login'
//     })
// });
router.delete('/delete/:userId', function (req, res, next) {
    User.destroy({
            where:{id: req.params.userId}
        })
        .then((user) => res.send(user))
        .catch((err) => res.send(err))
})

router.get("/failedLogin", (req, res) => {
    res.status(404).send({
        status: 404,
        data: null,
        message: 'Failed Login'
    })
})
router.get('/logout', function(req, res){
    req.logout();
});

router.get('/:userId', function (req, res) {
    res.send(req.user);
});

module.exports = router;