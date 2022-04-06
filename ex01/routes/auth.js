var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { registerSchema, signInSchema } = require('../schemas');
const { login } = require('../services/login');
const { register } = require('../services/register');
const userService = require('../services/user');
const { logout } = require('../services/logout');
var router = express.Router();

router.get('/me', auth.ensureSignedIn, auth.currentUser, async function (req, res, next) {
    const { currentUser } = req;
    const result = await userService.findById(currentUser?._id);
    res.json(result);
})

router.post('/logout', auth.ensureSignedIn, async (request, response) => {
    const result = logout(request.session);
    return response.json(result);
})

router.post('/login', auth.ensureSignedOut, joiValidation(signInSchema), async (request, response, next) => {
    const { email, password } = request.body;
    const user = await login(email, password);
    // const token = createASessionToken(user?._id, user?.email);
    request.session.jwt = user?.data?.token
    response.json(user);
})

router.post('/register', auth.ensureSignedOut, joiValidation(registerSchema), async (request, response, next) => {
    const createdUser = await register(request.body)
    response.json(createdUser);
})

module.exports = router;