var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    },
}, {
    timestamps: true,
});

var Users = mongoose.model('Users', userSchema);
module.exports = Users;