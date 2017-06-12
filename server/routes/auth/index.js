const express = require('express')
const router = express.Router()

const registerUser = require('./handlers/registerUser')
router.post('/register', registerUser)

module.exports = router
