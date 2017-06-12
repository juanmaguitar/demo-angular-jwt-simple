const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const jwt = require('jsonwebtoken') // to generate tokens
const expressJwt = require('express-jwt') // to verify tokens

const PORT = process.env.PORT || 3000
const app = express()

dotenv.load()

const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASSWORD

const jwtSecret = 'MaliStefaniAntoineSeidensticker'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))
app.use(expressJwt({ secret: jwtSecret }).unless({ path: ['/login'] }))

app.get('/data', (req, res) => {
  const msg = 'super secret data'
  res.json({msg})
})

app.post('/login', authenticate, (req, res) => {
  const msg = 'Enjoy your token'
  const { username } = req.body

  const token = jwt.sign({ username }, jwtSecret)
  res.json({ token, msg })
})

function authenticate (req, res, next) {
  const { username, password } = req.body
  if (!username || !password) {
    res.status(500).send('username or password not found...')
  }
  if (username !== USERNAME || password !== PASSWORD) {
    res.status(500).send('username or password incorrect...')
  }
  next()
}

app.listen(PORT)
console.log(`🔥 On fire on PORT ${PORT}`)
