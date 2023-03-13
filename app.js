const express = require('express');

//load environment variables in .env file
require('dotenv').config();

//instantiates express
const app = express();  

app.get('/', (req, res) => res.send("Hello World!"));

//sets the port defaults to 8000
const port = process.env.PORT || 8000

//runs the application on port 8000
app.listen(port, () => console.log(`server running on port ${port}`))