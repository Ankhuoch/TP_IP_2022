var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const userService = require('../services/user');
var router = express.Router();
const categoryService = require('../services/category.js');

router.get('/:id', auth.ensureSignedIn, async function (request, response, next) {
    const { id } = request.params;
    const result = await categoryService.findById(id);
    response.json(result);
})

router.post('/create', auth.ensureSignedIn, (req, res, next) => {
    const createdProduct = categoryService.create(req.body)
    res.json(createdProduct);
})
// all users
router.get('/all', auth.ensureSignedIn, (req, res) => {
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