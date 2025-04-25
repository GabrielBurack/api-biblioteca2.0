const express = require("express")
const authConstroller = require("./controllers/auth-constroller")
const router = express.Router()

router.post('/auth/register', authConstroller.register)

module.exports = router