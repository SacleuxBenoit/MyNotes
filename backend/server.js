const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT;

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/notes', require('./routes/noteRoutes'))

app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
})

app.use(errorHandler)