const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/products',require('./products'));
router.use('/categories',require('./categories'))
router.use('/reviews',require('./reviews'))
router.use('/orders',require('./orders'))
router.use('/enviar',require('./enviar'))

module.exports = router;