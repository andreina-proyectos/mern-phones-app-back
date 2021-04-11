const express = require('express')
const newPhonesList = require("./data-service")
const app = express()
const port = 3000;
const cors = require("cors");

app.use(cors());

//GET

app.get('/phones', (req, res) => {
  res
  .status(200)
  .json(newPhonesList)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})