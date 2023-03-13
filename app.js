const express = require('express');
//load environment variables in .env file
require('dotenv').config();

//connect to mongodb using mongoose (make sure you've already loaded
//your dotenv file)
const connectDB = require('./config/db');

//routes 
const books = require('./routes/api/books');

//instantiates express
const app = express();

//connect to the DB 
connectDB();
//sets the port defaults to 8000
const port = process.env.PORT || 8000

//runs the application on port 8000
app.listen(port, () => console.log(`server running on port ${port}`))