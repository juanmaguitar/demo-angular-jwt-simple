const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))

app.post('/login', (req, res) => {
  const { username, password } = req.body
  const msg = 'succesfull response...'
  res.json({ msg, username, password })
})

app.listen(PORT)
console.log(`🔥 On fire on PORT ${PORT}`)
