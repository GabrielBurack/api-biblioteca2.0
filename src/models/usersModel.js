const uuid = require("uuid").v4

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
            password
        }
        users.push(newUser)
        return newUser
    }
}