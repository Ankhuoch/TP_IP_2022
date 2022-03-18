const Joi = require('Joi');
module.exports = Joi.object({
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
});