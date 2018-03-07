const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/products',require('./products'));
router.use('/categories',require('./categories'))

module.exports = router;