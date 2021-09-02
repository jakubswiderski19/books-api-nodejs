const express = require('express')
const router = express.Router()

const { bookGet, booksGet, bookPut, bookDelete , bookPost } = require('../controllers/book')

router.get('/',booksGet)
router.get('/:id',bookGet)
router.put('/:id',bookPut)
router.delete('/:id',bookDelete)
router.post('/',bookPost)

module.exports = router