const Users = require("../models/user");
const login = (email, password) => {
    try {
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