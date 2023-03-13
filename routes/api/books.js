const express = require('express');
//use router to define routes in express
const router = express.Router();

//load book model 
const Book = require('../../models/Book')


// test route, to make sure API routing is running 
router.get('/test', (req,res) => res.send("book route testing"))

// show all the books
router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({
        nobooksfound: 'no books found'
    }))
})

//find by id 
router.get('/:id', (req, res) => {
    Book.findById(req.param.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({nobookfound: "no book found"}))
} )

// add a new book 
router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({msg: 'Book added successfully'}))
        .catch(err => res.status(400).json({error: err}))
})

module.exports = router;