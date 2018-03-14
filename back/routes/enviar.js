const express = require('express');
const router = express.Router();
const enviar= require('../utils')


//se ha probado los metodos y funcionan bien
router.post('/procesando',function(req,res){
    enviar.enviarProcesandoEmail(req.body.mail,req.body.id,req.body.direccion)
})
router.post('/completado',function(req,res){ 
   enviar.enviarCompletoEmail(req.body.mail,req.body.id)  
})
module.exports = router;
