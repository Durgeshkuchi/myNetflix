const express = require('express')
// const cors = require('cors')
const path = require('path')
const app = express()
const userController = require('./controllers/userController')
app.listen(4000, () => {
  // 1
  console.log('server started at post 3000...')
}) // 2
app.use('/api', userController)
// app.use(express.static(path.join(__dirname, 'build')))
app.get('/', function (req, res) {
  console.log('Serving at root')
})
