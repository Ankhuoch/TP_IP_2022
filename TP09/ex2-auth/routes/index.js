const { response } = require('express');
var express = require('express');
const { request } = require('http');
const joiValidation = require('../middlewares/joiValidation');
const { registerSchema, signInSchema } = require('../schemas');
const { login } = require('../services/login');
const { register } = require('../services/register');
var router = express.Router();

router.get('/', function (request, response, next) {
    console.log("Router Working");
    response.send("Hello from APIs");
})
router.post('/login', joiValidation(signInSchema), (request, response, next) => {
    const { email, password } = request.body
    const result = login(email, password)
    response.json(result);
})

router.post('/register', joiValidation(registerSchema), async (request, response, next) => {

    const result = await register(request.body)
    response.json(result);
})

module.exports = router;