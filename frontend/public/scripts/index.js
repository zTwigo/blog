// HTTP requests
import { createBlog } from "./requests.js";

// Add an event listener in order to make the modal appear
document.getElementById('open-modal').addEventListener('click', () => {
    // Open the modal
    openModal();
})

// Add an event listener in order to to perform a request to the backend to create a new blog
// as retrieving data from the input fields
document.getElementById('js-modal-footer-add').addEventListener('click', () => {
    // Get data
    const title = document.getElementById('js-input-title').value;
    const description = document.getElementById('js-input-desc').value;
    const author = document.getElementById('js-input-author').value;
    
    createBlog(author, title, description)
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        // Get the JSON
        const json = JSON.parse(data);

        window.location.href = 'blogs.html?id=' + json.id; 
    })
    ;
})

// Shows up the dialogue window
function openModal(){
    // Get the element
    document.getElementById('modal').style.display = 'block';
}