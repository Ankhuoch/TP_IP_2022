var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const userService = require('../services/user');
var router = express.Router();
const categoryService = require('../services/category.js');

router.get('/id/:id', auth.ensureSignedIn, async function (req, res) {
    const { id } = req.params;
    const result = await categoryService.findById(id);
    res.json(result);
})

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
    const { name, desc, imageUrl } = req.body;
    const result = await categoryService.create({ name, desc, imageUrl })
    res.json(result);
})
// all users
router.get('/all', (req, res) => {
    const categories = categoryService.findAll();
    res.json(categories);
})

router.post('/update', auth.ensureSignedIn, auth.currentUser,async (req, res, next) => {
    const { currentUser } = req;
    const result = await userService.findById(currentUser?._id);
    res.json(result);
})

router.post('/delete', auth.ensureSignedIn, auth.currentUser, async (req, res, next) => {
    const { currentUser } = req;
    const result = await userService.findById(currentUser?._id);
    res.json(result);
})
module.exports = router;