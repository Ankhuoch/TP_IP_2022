var express = require('express');
const { login } = require('../services/login');
const { register } = require('../services/register');
var router = express.Router();

router.get('/', function (request, response, next) {
    console.log("Router Working");
    response.send("Hello from APIs");
})
router.post('/login', (request, response, next) => {
    const { email, password } = request.body
    const result = login(email, password)
    response.json(result);
})

router.post('/register', async (request, response, next) => {
    const result = await register(request.body)
    response.json(result);
})

module.exports = router;