const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
// @desc Register user
// @route POST /api/users
// access Public
const userRegister = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User already exist')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('invalid data')
    }
})

// @desc Login user
// @route POST /api/users/login
// access Public
const userLogin = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User logged in' })
})

// @desc Get user
// @route GET /api/users
// access Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User data' })
})

module.exports = {
    userRegister,
    userLogin,
    getMe
}