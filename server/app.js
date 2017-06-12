const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const jwt = require('jsonwebtoken') // to generate tokens
const expressJwt = require('express-jwt') // to verify tokens

const passport = require('./config/passport')

const authRoutes = require('./routes/auth')

const PORT = process.env.PORT || 3000
const app = express()

dotenv.load()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))
app.use(passport.initialize())

app.get('/data', (req, res) => {
  const msg = 'super secret data'
  res.json({msg})
})

app.use(authRoutes)

module.exports = app
