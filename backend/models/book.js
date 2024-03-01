const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    consumed: {
        type: Boolean,
        required: true,
        default: false
    },
    genre: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Book', BookSchema)