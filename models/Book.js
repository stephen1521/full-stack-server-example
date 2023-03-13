const mongoose = require("mongoose");

// create a scheme for a book.
// fields: title, isbn, author, description, published_date,
// publisher, updated_date

const BookSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    published_date: {
        type: Date
    }, 
    publisher: {
        type: String 
    },
    update_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Book = mongoose.model('book', Book)