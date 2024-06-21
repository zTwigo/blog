// Import the express library in order to host this website
const express = require('express');

// Creates an Express application. The express() function is a top-level function exported by the express module.
const app = express();

// Modify, add or delete something from/to a json file
const { json } = require('./scripts/json.cjs');

// The user will be instantly redirected to the main page of the website
app.get('/', (req, res) => {
    return res.status(200).json( { message : 'This is bloggest backend!' } );
});

// The user just created a new blog so it's necessary to save the information about it into a JSON file
app.post('/create', (req, res) => {
    // Get the params and send them to the function
    json.postBlog(req.query);

    // Response
    res.status(200).json( { message : 'Successful!' } );
});

// Listen for connections
app.listen(6000, () => {
    console.log('Port is listening at http://localhost:5000 !')
})