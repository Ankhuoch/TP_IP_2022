var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const itemService = require('../services/item');

router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
    response.json();
})

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
  const { name, desc, category } = req.body;
  const result = await itemService.create({ name, desc, category })
  res.json(result);
})

// all users
router.get('/all', (req, res) => {
    const items = itemService.findAll();
    res.json(items);
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  const item = await itemService.update(req.body)
  res.json(item);
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  const item = await itemService.remove(req.body)
  res.json(item);
})

module.exports = router