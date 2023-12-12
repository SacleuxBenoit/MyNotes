const express = require('express')
const router = express.Router()
const { getNotes, createNote } = require('../controllers/noteControllers')

router.get('/', getNotes)
router.post('/', createNote)

module.exports = router