// Student Name: Mohammedfaiq shaikh
// Student ID: 

document.addEventListener("DOMContentLoaded", function() {
    
    // Dynamic body container
    const nav = document.getElementById("nav-bar");
    const container = `
    <div class="container">
        <a class="navbar-brand" href="index.html">FaiqsHub</a>
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
            <header>
                <h1>Welcome to My Website</h1>
                <p>.</p>
            </header>
        `,
        "product.html": `
            <h1>My Favorite Media</h1>
            <p>Here are three of my favorite pieces of media:</p>
            <ul>
                <li><strong>Book:</strong> The Hobbit</li>
                <li><strong>Movie:</strong> Inception</li>
                <li><strong>Music:</strong> Bohemian Rhapsody - Queen</li>
            </ul>
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
            <h1>Get in touch</h1>
            <p></p>
        `
    };

    const page = window.location.pathname.split("/").pop() || "index.html";
    document.getElementById("content").innerHTML = pageContent[page];

    // Dynamic Copyright
    document.getElementById("copyright").innerHTML = `© ${new Date().getFullYear()} FaiqsHub`;
});
