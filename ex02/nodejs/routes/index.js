var express = require('express');
var router = express.Router();

router.use('/auth', require('./auth'));
router.use('/user', require('./user'));
router.use('/category', require('./category'));
router.use('/item', require('./item'));
router.use('/product', require('./product'));

module.exports = router;