var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const userService = require('../services/user');
var router = express.Router();

router.get('/:id', auth.ensureSignedIn, async function (request, response, next) {
    const { id } = request.params;
    const result = await userService.findById(id);
    response.json(result);
})
// all users
router.get('/all', auth.ensureSignedIn, (req, res) => {
    res.json();
})

router.post('/update', auth.ensureSignedIn, auth.currentUser,async (req, res, next) => {
    const { currentUser } = req;
    const result = await userService.findById(currentUser?._id);
    res.json(result);
})

router.post('/update-password', auth.ensureSignedIn, auth.currentUser, async (req, res, next) => {
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