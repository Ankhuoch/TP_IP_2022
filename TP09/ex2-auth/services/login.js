const Users = require("../models/user");
const bcrypt = require('bcryptjs');
const login = (email, password) => {
    try {
        
        bcrypt.compareSync(password, hash);
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
    login,
}