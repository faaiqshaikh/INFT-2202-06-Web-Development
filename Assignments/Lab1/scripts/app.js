// Student Name: Mohammedfaiq Shaikh
// Student ID: 100905727
// Date Completed: 08-02-2025

// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent page refresh

    // Get form value
    let name = document.getElementById("name").value;

    // Notify user
    document.getElementById("status").innerText = `User: ${name}, getting your info...`;

    // Redirect after 3 seconds
    setTimeout(() => {
        window.location.href = "contact.html";
    }, 3000);
}


// When DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Dynamic body container
    const nav = document.getElementById("nav-bar");
    const container = `
    <div class="container">
        <a class="navbar-brand" href="index.html"><li class="fa-solid fa-cat"></li> FaiqsHub</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto" id="nav-links"></ul>
        </div>
    </div>`;

    nav.innerHTML = container;

    // Dynamic Navbar
    const navItems = [
        { name: "Home", link: "index.html", icon: "fa-solid fa-home" },
        { name: "Products", link: "product.html", icon: "fa-solid fa-box-open" }, // Changed from "Products"
        { name: "Services", link: "services.html", icon: "fa-solid fa-tools" },
        { name: "About Me", link: "about.html", icon: "fa-solid fa-info" },
        { name: "Contact", link: "contact.html", icon: "fa-solid fa-phone" },
        { name: "Human Resources", link: "human-resource.html", icon: "fa-solid fa-user" } // Dynamically added
    ];

    const navList = document.getElementById("nav-links");
    navItems.forEach(item => {
        let listItem = document.createElement("li");
        listItem.classList.add("nav-item");
        listItem.innerHTML = `<a class="nav-link" href="${item.link}">${item.icon ? `<i class="${item.icon}"></i> ` : ""}${item.name}</a>`;
        navList.appendChild(listItem);
    });
    
    // Dynamic Page Content Injection
    const pageContent = {
        "index.html": `
            <div class="bg-dark text-white d-flex align-items-center justify-content-center vh-100 background">
                <h1>Welcome to <br><li class="fa-solid fa-cat"></li>FaiqsHub</h1>
                <p>This website illustrates my DOM manipulation skills, <br>All pages on this site is displayed dynamically.
                </br>please feel free to <a href="contact.html">get in touch</a> for collab!</p>    
            </div>
        `,
        "product.html": `
        <div class="d-flex align-items-center justify-content-center vh-100 text-white text-center">
            <div class="p-5 rounded shadow-lg bg-dark bg-opacity-75">
                <h1 class="display-4 fw-bold text-warning">My Favorite Media</h1>
                <p class="lead fst-italic">Here are three of my favorite pieces of media:</p>
                <ul class="list-unstyled">
                    <li class="fs-4"><i class="fa-solid fa-book text-primary"></i> <strong>Book:</strong> The Hobbit</li>
                    <li class="fs-4"><i class="fa-solid fa-film text-danger"></i> <strong>Movie:</strong> Inception</li>
                    <li class="fs-4"><i class="fa-solid fa-music text-success"></i> <strong>Music:</strong> Bohemian Rhapsody - Queen</li>
                </ul>
            </div>
        </div>

        `,
        "services.html": `
            <h1>My Services</h1>
            <p>Here are three services I offer:</p>
            <ul>
                <li>Web Development</li>
                <li>Graphic Design</li>
                <li>SEO Optimization</li>
            </ul>
        `,
        "about.html": `
            <h1>About Me</h1>
            <p></p>
        `,
        "contact.html": `
            <h2 class="text-center h2-pd"><li class="fa-solid fa-phone"></li> Get In Touch</h2>
                <form onsubmit="handleSubmit(event)" class="w-50 mx-auto p-4 border rounded">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="contact" class="form-label">Contact Number</label>
                        <input type="tel" class="form-control" id="contact" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Short Message</label>
                        <textarea class="form-control" id="message" rows="3" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                </form>

            <!-- Status Message -->
            <p id="status" class="text-center mt-3 text-success"></p>
        `
    };

    const page = window.location.pathname.split("/").pop() || "index.html";
    document.getElementById("content").innerHTML = pageContent[page] || "<h1>Page Not Found</h1>";

    // Dynamic Copyright
    document.getElementById("copyright").innerHTML = `© ${new Date().getFullYear()} FaiqsHub`;
});
