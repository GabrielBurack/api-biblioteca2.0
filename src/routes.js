const express = require("express")
const authConstroller = require("./controllers/auth-constroller")
const {ensureAuth} = require("./middlewares/auth-middleware")
const router = express.Router()

router.post('/auth/register', authConstroller.register)
router.post('/auth/login', authConstroller.login)

router.get('/test' , ensureAuth, (req, res) => res.json({message: 'OK'}))

module.exports = router