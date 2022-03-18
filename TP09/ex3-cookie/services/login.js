const Users = require("../models/users");
const bcrypt = require('bcryptjs');
const login = async (email, password) => {
    try {
        
        const user = await Users.findOne({ email })
        if (!user){
            throw 'The user is not found~'
        }
        if (!user.matchesPassword(password)) {
            throw "The user's information is incorrects~"
        }
        // Users.find({email})
        return {
            success: true,
            data: null
        }
    }catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
    
}

module.exports = {
    login
}