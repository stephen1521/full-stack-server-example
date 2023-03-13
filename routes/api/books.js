const express = require('express');
//use router to define routes in express
const router = express.Router();

//load book model 
const Book = require('../../models/Book')


// test route, to make sure API routing is running 
router.get('/test', (req,res) => res.send("book route testing"))


module.exports = router;