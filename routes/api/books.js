const express = require('express');

//use router to define routes in express
const router = express.Router();


router.get('/', (req, res) => res.send("Hello World!"));

module.exports = router;