const asyncHandler = require('express-async-handler')

// @desc Register user
// @route POST /api/users
// access Public
const userRegister = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'user created' })
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