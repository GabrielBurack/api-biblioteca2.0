const usersModel = require("../models/usersModel")
const users = require("../models/usersModel")

module.exports = {

    // POST /auth/register
    register: (req, res) => {
        const {name, email, password} = req.body

        if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
        }

        const existingUser = usersModel.getUserByEmail(email)
        if(existingUser){
            return res.status(400).json({message: "email ja cadastrado"})
        }

        const newUser = usersModel.createUser(name, email, password)
        res.status(201).json(newUser)

    }
}