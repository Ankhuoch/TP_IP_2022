const { readUsers, writeUsers } = require("../db/db")

const register = (params) => {
    try {
        const { email, username, firstName, lastName, password } = params;
        const users = readUsers();

        const existed = users?.some(user => user.email == email)
        if (existed) {
            throw "User is already existed~";
        }

        const newUser = {
            email,
            username,
            firstName,
            lastName,
            password
        }

        users.push(newUser);
        //insert to db
        writeUsers(users);

        return {
            success: true,
            data: newUser
        }
    }catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
    
}
module.exports = {
    register,
}