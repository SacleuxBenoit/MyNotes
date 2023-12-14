const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add title value']
    },
    note_content: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Note', noteSchema)