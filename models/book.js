const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type:String, required:true },
  author: { type:String, required:true },
  description: { type:String }
})

const BookModel = mongoose.model('BookModel',bookSchema)

module.exports = BookModel