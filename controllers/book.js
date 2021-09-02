const express = require('express')
const bookModel = require('../models/book')


const bookGet = async (req,res) =>{
  const { id } = req.params
  const records = await bookModel.find({'_id': id}).exec()
  res.status(200).json(records)
}

const bookPut = async (req,res) =>{
  const { id } = req.params
  const { title:NewTitle, author:NewAuthor, description:NewDesription } = req.body
  const update = await bookModel.updateOne(
    {
      '_id': id
    },{
        $set: {
          title: NewTitle,
          author: NewAuthor,
          description:NewDesription
        }
      }
  )
  res.status(200).json(update)
}

const bookDelete = async (req,res) =>{
  const { id } = req.params
  const deleted = await bookModel.deleteOne({'_id': id})
  res.status(200).json(deleted)
}

const booksGet = async (req,res) =>{
  const records = await bookModel.find({})
  res.status(200).json(records)
}

const bookPost = async (req,res) =>{
  const request = req.body
  const record = await bookModel.create(request)
  res.status(200).json(record)
}

module.exports = { booksGet, bookGet, bookPut, bookDelete , bookPost }