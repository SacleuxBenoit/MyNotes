const getNotes = (req, res) => {
    res.status(200).json({ message: 'Get notes' })
}

module.exports = {
    getNotes
}