const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/products',require('./products'));
router.use('/categories',require('./categories'))
router.use('/reviews',require('./reviews'))
router.use('/orders',require('./orders'))
router.use('/enviar',require('./enviar'))
router.use('/carrito',require('./carrito'))

module.exports = router;