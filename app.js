const express = require('express');

//instantiates express
const app = express();  

app.get('/', (req, res) => res.send("Hello World!"));

//sets the port 
const port = process.env.PORT || 8000

//runs the application on port 8000
app.listen(port, () => console.log(`server running on port ${port}`))