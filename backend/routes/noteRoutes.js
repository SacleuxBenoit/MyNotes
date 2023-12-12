const express = require('express')
const router = express.Router()
const { getNotes } = require('../controllers/noteControllers')

router.get('/', getNotes)
module.exports = router