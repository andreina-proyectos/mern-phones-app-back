const express = require('express')
const phonesList = require("./data-service")
const app = express()
const port = 3000;

//GET
app.get('/', (req, res) => {
  res.send('Test andre!')
})

app.get('/phones', (req, res) => {
  res
    .status(200)
    .json(phonesList)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})