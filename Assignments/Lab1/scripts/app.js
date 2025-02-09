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
        { name: "Human Resources", link: "human-resource.html", icon: "fa-solid fa-user" },
        { name: "Contact", link: "contact.html", icon: "fa-solid fa-phone" }
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
        <div class="container mt-5">
            <div class="row">
                <!-- Card 1: Book -->
                <div class="col-md-4">
                    <div class="card shadow-lg">
                    <!-- images are used from external src: cloudfront.net-->
                        <img src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873869/the-hobbit-9781608873869_hr.jpg" class="card-img-top" alt="The Hobbit Book Cover">
                        <div class="card-body">
                            <h5 class="card-title text-primary">📖 The Hobbit</h5>
                            <p class="card-text">
                                J.R.R. Tolkien's <b>The Hobbit</b> is an enchanting adventure that takes readers to the world of Middle-earth. 
                                Join Bilbo Baggins, a reluctant hero, as he embarks on a thrilling journey filled with dragons, treasures, and courage.
                            </p>
                            <a href="https://en.wikipedia.org/wiki/The_Hobbit:_An_Unexpected_Journey" class="btn btn-warning">Learn More</a>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Movie -->
                <div class="col-md-4">
                    <div class="card shadow-lg">
                        <!-- images are used from external src: m.media.amazon.com-->
                        <img src="https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg" class="card-img-top" alt="Inception Movie Poster">
                        <div class="card-body">
                            <h5 class="card-title text-danger">🎬 Inception</h5>
                            <p class="card-text">
                                Christopher Nolan’s <b>Inception</b> is a mind-bending thriller that explores dreams within dreams. 
                                With stunning visuals, a gripping storyline, and an unforgettable score, it keeps viewers questioning reality.
                            </p>
                            <a href="https://www.youtube.com/watch?v=LifqWf0BAOA" class="btn btn-danger">Watch Trailer</a>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Music -->
                <div class="col-md-4">
                    <div class="card shadow-lg">
                    <!-- images are used from external src: m.media.amazon.com-->
                        <img src="https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_.jpg" class="card-img-top" alt="Bohemian Rhapsody Album Cover">
                        <div class="card-body">
                            <h5 class="card-title text-success">🎵 Bohemian Rhapsody - Queen</h5>
                            <p class="card-text">
                                *Bohemian Rhapsody* is a rock masterpiece by Queen, blending opera, ballad, and hard rock seamlessly. 
                                With Freddie Mercury’s powerful vocals, it remains one of the greatest songs of all time.
                            </p>
                            <a href="https://music.youtube.com/watch?v=utwMHfDZ6SA" class="btn btn-success">Listen Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        `,
        "services.html": `
            <div class="services-bg ">
            <div class="container text-white justify-content-center align-items-center vh-100">
                <h2 class="text-center mb-5">My Expertise</h2>
                <div class="row">
                <!-- Service 1 -->
                <div class="col-md-4 mb-4">
                    <div class="card text-white services-card">
                    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="Custom Programming">
                    <div class="card-body">
                        <h5 class="card-title">Custom Programming</h5>
                        <p class="card-text">I offer custom programming solutions tailored to your business needs, including web apps, desktop software, and more.</p>
                        
                    </div>
                    </div>
                </div>
                <!-- Service 2 -->
                <div class="col-md-4 mb-4">
                    <div class="card text-white services-card">
                    <img src="https://wpengine.com/wp-content/uploads/2018/09/website-design-patterns_1200x627.png" class="card-img-top" alt="Web Design">
                    <div class="card-body">
                        <h5 class="card-title">Web Design</h5>
                        <p class="card-text">Creating beautiful and responsive websites that provide a seamless user experience and are optimized for all devices.</p>
                        
                    </div>
                    </div>
                </div>
                <!-- Service 3 -->
                <div class="col-md-4 mb-4">
                    <div class="card text-white services-card">
                    <img src="https://img.freepik.com/free-photo/smartphone-with-user-interface-concept_52683-104212.jpg?semt=ais_hybrid" class="card-img-top" alt="Mobile Development">
                    <div class="card-body">
                        <h5 class="card-title">Mobile Development</h5>
                        <p class="card-text">Building cross-platform mobile applications that provide high performance and an excellent user experience.</p>
                    </div>
                    </div>
                </div>
                <h2 class="text-center mb-5"><a href="https://plum-helsa-66.tiiny.site" class="btn btn-primary w-100">View Resume</a></h2>
                </div>
            </div>
            </div>
        `,
        "about.html": `
            <div class="container about-me-container">
                <div class="row justify-content-center">
                    <div class="col-md-4 text-center">
                        <!-- Avatar/Image Section -->
                        <img src="https://images.pexels.com/photos/6241197/pexels-photo-6241197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="My Avatar" class="avatar mb-4">
                    </div>
                    <div class="col-md-8">
                        <!-- Introductory text section -->
                        
                        <div class="section-title">Hello! I'm Faiq Shaikh</div>
                        <p class="intro-text">
                            Hello! My name is Faiq Shaikh, and I’m passionate about Web Development. I'm fortunate to have an amazing family who constantly supports me, including my mom, dad and my sister. When I'm not spending time with them, I enjoy hanging out with friends. 
                            I also volunteer at dcmsa because I believe in equity and diversity. One of my favorite activities is playing cricket, which allows me to stay active and connect with others.
                            In my free time, I love to be a sketch artist. I am always looking to learn new things and grow both personally and professionally.
                        </p>
                    </div>
                </div>
                
                <div class="row mt-5">
                    <div class="col-12">
                        <div class="section-title">My Family & Pets</div>
                        <div class="section-title">My Family</div>
                        <p class="intro-text">
                            I’m lucky to have a wonderful family who keeps me grounded. My mom, dad and my sister are my biggest source of joy. We often spend weekends watching movies together.
                        </p>
                    </div>
                </div>
                
                <div class="row mt-5">
                    <div class="col-12">
                        <div class="section-title">Other Hobbies & Interests</div>
                        <p class="intro-text">
                            Aside from spending time with family, I have a few other hobbies that keep me busy. I enjoy playing cricket. I also love exploring new places and trying new things, so I often take short trips to discover different cultures, foods, and people. Life is an adventure, and I try to make the most of it every day.
                        </p>
                    </div>
                </div>
            </div>
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
