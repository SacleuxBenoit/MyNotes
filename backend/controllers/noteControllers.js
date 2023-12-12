const asyncHandler = require('express-async-handler')

const getNotes = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get notes' })
})

const createNote = asyncHandler(async (req, res) => {
    if (!req.body.title || !req.body.note_content) {
        res.status(400)
        throw new Error('Please add a title or content for your note')
    }

    res.status(200).json({ message: 'Create note' })
})

module.exports = {
    getNotes,
    createNote
}