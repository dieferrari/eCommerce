const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');




router.post('/',function(req,res){
 
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
            type:'OAuth2',
            user:'hola.teststore@gmail.com',
            clientId:'377989625562-tiunge0tt0fj5pfh3d7h2b9b21addaes.apps.googleusercontent.com',
            clientSecret:'zVaPnMpd9mFo5SJDLQQW6nkV',
            refreshToken:'1/5oMh2fsbzebz5h7OsvwdYArT6tjO-57VdrMPZShjU0dPT4AAuIZJZ6rLfzcGZ13U'
        
    }
});
const body={
    subject: "Orden recibida", 
    text: "Hola, su compra fue recibida" 
}

var mailOptions = {
    from: "Test Store <hola.teststore@gmail.com>", // sender address
    to: ['sieiro.nicolas@gmail.com','die.a.ferrari@gmail.com'], 
    subject: body.subject,
    text: body.text
}
transporter.sendMail(mailOptions,function(err,response){
    if(err){
        console.log(err)
    }
    else{
        console.log('Email Enviado')
    }
})
    
})
module.exports = router;
