const mongoose = require('mongoose');
const password = process.env['password']
const db = process.env['db']
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bookModel = require('./models/book')
const bookRouter = require('./routes/book')

const uri = `mongodb+srv://admin:${password}@cluster0.gpfzo.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose.connect(uri);

app.use(bodyParser.json())

app.use('/book',bookRouter)

app.get('/',(req,res)=>{
  res.send('eluwina')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})