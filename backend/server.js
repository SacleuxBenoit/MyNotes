const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')

const port = process.env.PORT;

const app = express()

app.use('/api/notes', require('./routes/noteRoutes'))

app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
})