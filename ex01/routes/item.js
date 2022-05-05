var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const itemService = require('../services/item');

router.get('/id/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  const result = await itemService.findById(id)
  res.json(result);
})

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
  const { name, desc, category } = req.body;
  const result = await itemService.create({ name, desc, category })
  res.json(result);
})

// all users
router.get('/all', async (req, res) => {
    const items = await itemService.findAll();
    res.json(items);
})

router.post('/update/:id', auth.ensureSignedIn, async (req, res, next) => {
  const { id } = req.params;
  const { name, desc} = req.body;
  const result = await itemService.update(id, { name, desc});
  res.json(result);
})

router.post('/delete/:id', auth.ensureSignedIn, async (req, res, next) => {
  const { id } = req.params;
  const item = await itemService.remove(id)
  res.json(item);
})

module.exports = router