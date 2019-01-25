const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

var orderIMG = ['img/grenade.jpg','img/lime.jpg','img/raisin.jpg']


app.get('/getFruit', (req, res) => {
  res.json({orderIMG:orderIMG})
})

app.post('/updateFruit', (req,res)=>{
  // console.log(req.body.orderIMG)
  orderIMG = req.body.orderIMG
  console.log(orderIMG)
  res.send('OK')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))