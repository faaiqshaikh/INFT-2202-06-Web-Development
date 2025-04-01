document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");

    // Fetch blog posts using Fetch API
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            const posts = data.slice(0, 20); // Get first 20 posts
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("col-md-4", "mb-4"); // Bootstrap grid for responsiveness
                postElement.innerHTML = `
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                        </div>
                    </div>
                `;
                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
});
