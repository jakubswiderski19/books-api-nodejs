const express = require('express')
const router = express.Router()

const { bookGet, bookPost } = require('../controllers/book')

router.get('/',bookGet)
router.post('/',bookPost)

module.exports = router