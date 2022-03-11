var express = require('express');
const { login } = require('../services/login');
const { register } = require('../services/register');
var router = express.Router();

router.post('/login', function (request, response) {
    console.log(request.body);
    // response.send("Hello");
    const { email, password } = request.body
    const result = login(email, password)
    response.json(result)
});

router.post('/register', function (request, response) {
    const result = register(request.body)
    response.json(result)
});

module.exports = router;