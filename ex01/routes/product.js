var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const productService = require('../services/product');

router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  const result = await productService.findById(id);
  response.json(result);
})

router.post('/create', auth.ensureSignedIn, async (req, res,) => {
  const { title, category, item, user, imageUrl, desc, } = req.body;

  const result = await productService.create({
    title,
    category,
    item,
    user,
    imageUrl,
    desc,
  })
  res.json(result);
})

// all users
router.get('/all', (req, res) => {
  const products = productService.findAll();
  res.json(products);
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  const product = await productService.update(req.body);
  res.json(product);
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  const product = await productService.update(req.body);
  res.json(product);
})

module.exports = router