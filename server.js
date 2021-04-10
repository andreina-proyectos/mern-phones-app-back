const express = require('express')
const app = express()
const port = 3000;

const phonesList = [
  {
   "id":  1,
   "model": "nokia",
   "manufacturer": "nokia.sa",
   "img": "",
   "description": "this is a description text about phone"
  },
  {
    "id":  2,
    "model": "iphone",
    "manufacturer": "Apple",
    "img": "",
    "description": "this is a description text about phone"
  },
  {
    "id":  3,
    "model": "samsung galaxy",
    "manufacturer": "Samsung",
    "img": "",
    "description": "this is a description text about phone"
  }
]

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