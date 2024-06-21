// HTTP request to the backend in order to create a new blog page
export async function createBlog(author, title, description){
    // Query params
    const params = {
        author,
        title,
        description
    };

    // Perform the http request
    return await fetch('http://localhost:3000/create?' + new URLSearchParams(params).toString(), {
        method : 'POST'
    })
}