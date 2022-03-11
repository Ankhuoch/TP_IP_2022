const { readUsers } = require("../db/db")

const login = (email, password) => {
    try {
        const users = readUsers();

        const index = users?.findIndex(user => user.email == email);
        if (index < 0) {
            throw 'The user is not found~'
        }
        const user = users[index];
        if(user?.password != password) {
            throw "The user's information is incorrect~"
        }

        return {
            success: true,
            data: user
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