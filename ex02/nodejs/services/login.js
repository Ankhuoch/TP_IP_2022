const Users = require("../models/users");
const bcrypt = require('bcryptjs');
const { createASessionToken } = require('../services/utils');
const login = async (email, password) => {
    try {
        
        const user = await Users.findOne({ email })
        if (!user){
            throw 'The user is not found~'
        }
        if (!user.matchesPassword(password)) {
            throw "The user's information is incorrects~"
        }

        const token = createASessionToken(user?._id, user?.email);
        // Users.find({email})
        return {
            success: true,
            data: {
                user,
                token,
            }
        }
    }catch (err) {
        console.log(err);
        return {
            success: false,
            error: err || 'error'
        }
    }
    
};

module.exports = {
    login
}