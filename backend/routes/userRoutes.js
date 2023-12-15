const express = require('express')
const { userRegister, userLogin, getMe } = require('../controllers/userControllers')

const router = express.Router()

router.post('/', userRegister)
router.post('/login', userLogin)
router.get('/me', getMe)

module.exports = router