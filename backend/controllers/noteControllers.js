const Note = require('../models/noteModel')

const asyncHandler = require('express-async-handler')

const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find()
    res.status(200).json(notes)
})

const createNote = asyncHandler(async (req, res) => {
    if (!req.body.title || !req.body.note_content) {
        res.status(400)
        throw new Error('Please add a title or content for your note')
    }

    const note = await Note.create({
        title: req.body.title,
        note_content: req.body.note_content
    })

    res.status(200).json(note)
})

const updateNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id)

    if (!note) {
        res.status(400)
        throw new Error('Note not found')
    }

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedNote)
})

const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id)

    if (!note) {
        res.status(400)
        throw new Error('Note not found')
    }

    await Note.deleteOne()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getNotes,
    createNote,
    updateNote,
    deleteNote
}