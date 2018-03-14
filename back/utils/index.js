const nodemailer = require('nodemailer');

const enviarEmail=function(subject,text,to){
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
                type:'OAuth2',
                user:'hola.teststore@gmail.com',
                clientId:'377989625562-tiunge0tt0fj5pfh3d7h2b9b21addaes.apps.googleusercontent.com',
                clientSecret:'zVaPnMpd9mFo5SJDLQQW6nkV',
                refreshToken:'1/5oMh2fsbzebz5h7OsvwdYArT6tjO-57VdrMPZShjU0dPT4AAuIZJZ6rLfzcGZ13U' 
        }
    });//transporter
    var mailOptions = {
        from: "Test Store <hola.teststore@gmail.com>", // nuestro mail
        to:to, 
        subject:subject,
        text: text
    }//mailoptions
    transporter.sendMail(mailOptions,function(err,response){
        err?console.log(err):console.log('Email Enviado')   
    })//transporter
}
const enviarCheckoutEmail=function(mail,orderId){
    var subject='Compra realizada'
    var text=`Has realizado una compra , la misma tiene un Order ID=${orderId}`
    enviarEmail(subject,text,mail)
}
const enviarProcesandoEmail=function(mail,orderId,OwnerDirection){
    var subject='Compra en proceso'
    var text=`Tu compra con un Order ID=${orderId}, ha sido despachada a la direccion: ${OwnerDirection}`
    enviarEmail(subject,text,mail)
}
const enviarCompletoEmail=function(mail,orderId){
    var subject='Pedido completado'
    var text=`tu compra con un Order ID=${orderId}, se ha completado`
    enviarEmail(subject,text,mail)
}


module.exports={enviarEmail,
    enviarCheckoutEmail,
    enviarProcesandoEmail,
    enviarCompletoEmail}