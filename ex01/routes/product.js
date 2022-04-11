var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const productService = require('../services/product');

router.get('/id/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  const result = await productService.findById(id);
  res.json(result);
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
router.get('/all', async (req, res) => {
  const products = await productService.findAll();
  res.json(products);
})

router.post('/update/:id', auth.ensureSignedIn, async (req, res, next) => {
  const { id } = req.params;
  const { title, desc, imageUrl} = req.body;
  const result = await itemService.update(id, { title, desc, imageUrl});
  res.json(result);
})

router.post('/delete/:id', auth.ensureSignedIn, async (req, res, next) => {
  const { id } = req.params;
  const result = await productService.remove(id);
  res.json(result);
})

module.exports = router