const Users = require('../models/users')

const findById = async (id) => {
    try {
        const user = await Users.findById(id);
        return {
            success: true,
            data: user
        };
    }catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}

const findAll = async ()=> {
    try{
        const user = await Users.find();
        return {
            success: true,
            data: user
        };
    }catch (err){
        return {
            success: false,
            error: err || 'error'
        }
    }
}
  
const updatePass = async (id, password) => {
    try {
        Users.findByIdAndUpdate(id, {password: password});
        return {
            success: true,
            msg: "updated"
        };
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}
  
const update = async (id, username, firstName, lastName, email) => {
    try {
        Users.findByIdAndUpdate(id, {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email
        });
        return {
            success: true,
        };
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}
  
const remove = async (id) => {
    try {
        Users.findByIdAndDelete(id);
        return {
            success: true,
            msg: "deleted"
        };
    }catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}

module.exports = {
    findById,
    update,
    findAll,
    remove,
    updatePass
}