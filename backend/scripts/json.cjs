// Import the library to manipulate the fyle system
const fs = require('fs');
// Generate unique identifiers for each blog
const { 
    v1: uuidv1,
    v4: uuidv4,
} = require('uuid');

// Read the JSON file and get its content
function readJSON(){
    // Get the text within
    const content = fs.readFileSync('/data/json/blogs.json', { encoding : 'utf8' });

    // Get the blogs property while parsing
    const ret = JSON.parse(content)['blogs'];

    // Return the value
    return ret;
}

// Write some data into a JSON file - procedure
function writeJSON(content){
    fs.writeFileSync("data/json/blogs.json", JSON.stringify({ blogs : content }, null, 4));
}

// Post a new blog into the website
function postBlog(params){
    // Destructuring
    const { title, description } = params;

    // Create the object that will contain all data
    const blog = {
        id: uuidv4(),
        // Shorthand properties
        title, 
        description
    };

    // Get all the blogs
    const blogs = readJSON();

    // Since blogs it's an array I can work with it as it is
    blogs.push(blog);

    // Write back everything to the JSON file
    writeJSON(blogs);
}

// Object that will contain all the functions needed
const json = {
    postBlog
};

// Export the file
module.exports = { json };