// HTTP request to the backend in order to create a new blog page
export async function createBlog(title, description){
    // Query params
    const params = {
        title,
        description
    };

    // Perform the http request
    return await fetch('http://localhost:6000' + new URLSearchParams(params).toString(), {
        method : 'POST'
    })
}