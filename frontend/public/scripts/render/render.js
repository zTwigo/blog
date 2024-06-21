// Perform an HTTP request in order to get the data that needs to be rendered
async function getBlog(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    // Get the id value
    const id = params.id;

    // Get the information
    const data = await (await fetch(`http://localhost:3000/blog?id=${id}`)).json();

    // Render the page
    renderPage(data);
}

// Render the information from the backend
function renderPage(data){
    // Get all data
    const { author, title, description } = data;

    // Find the elements on the page
    document.getElementById('author').innerHTML += author;
    document.getElementById('title').innerHTML += title;
    document.getElementById('description').innerHTML += description;
}

getBlog();