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
    const content = fs.readFileSync("./data/json/blogs.json", { encoding : 'utf8' });

    // Get the blogs property while parsing
    const ret = JSON.parse(content)['blogs'];

    // Return the value
    return ret;
}

// Write some data into a JSON file - procedure
function writeJSON(content){
    fs.writeFileSync("./data/json/blogs.json", JSON.stringify({ blogs : content }, null, 4));
}

// Get a blog 
function getBlog(params){
    // Get the id 
    const { id } = params;

    // Get all the content
    const blogs = readJSON();

    // Get the correct blog
    const blog = findBlog(blogs, id);

    // Return data
    return blog;
}

// Post a new blog into the website
function postBlog(params){
    // Destructuring
    const { author, title, description } = params;

    // Generate an id
    const id = uuidv4();

    // Create the object that will contain all data
    const blog = {
        id,
        // Shorthand properties
        author,
        title, 
        description
    };

    // Get all the blogs
    const blogs = readJSON();

    // Since blogs it's an array I can work with it as it is
    blogs.push(blog);

    // Write back everything to the JSON file
    writeJSON(blogs);

    // Return the id
    return id;
}

// Find the blog
function findBlog(blogs, id){
    // Return value
    let ret;

    // Loop through the array and search for it
    blogs.forEach(blog => {
        if(blog.id === id) ret = blog;
    })

    // Return the value
    return ret;
}   

// Object that will contain all the functions needed
const json = {
    postBlog,
    getBlog
};

// Export the file
module.exports = { json };