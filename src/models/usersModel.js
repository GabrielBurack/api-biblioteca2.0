const uuid = require("uuid").v4
const bcrypt = require("bcrypt")

let users = [
    {id: "1", name: "gabriel burack", email: "gabriel@email.com", password: "1234"},
    {id: "2", name: "joao silva", email: "joao@email.com", password: "4321"}
]

module.exports = {
    getAllUsers: () => users,

    getUserById: (id) => users.find(users => users.id === id),

    getUserByEmail: (email) => users.find(users => users.email === email),

    createUser: (name, email, password) => {
        const newUser = {
            id: uuid(),
            name, 
            email,
            password: bcrypt.hashSync(password, 10)
        }
        users.push(newUser)
        return newUser
    }
}