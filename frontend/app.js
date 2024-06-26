// Import the express library in order to host this website
const express = require('express');

// Creates an Express application. The express() function is a top-level function exported by the express module.
const app = express();

// This is a built-in middleware function in Express. It serves static files and is based on serve-static.
app.use(express.static('public'))

// The user will be instantly redirected to the main page of the website
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/progetto/index.html');
})

// Listen for connections
app.listen(5000, () => {
    console.log('Port is listening at http://localhost:5000 !')
})