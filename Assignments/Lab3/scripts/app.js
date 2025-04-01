$(document).ready(function () {
    // Login Page - Insert username in navbar after Contact Us link
    $("#loginForm").submit(function (event) {
        event.preventDefault(); // Prevent form submission

        let username = $("#username").val().trim();
        let password = $("#password").val().trim();
        let isValid = true;

        // Validate Username
        if (username === "") {
            $("#usernameError").show();
            isValid = false;
        } 
        else if (username.length < 2) {
            $("#usernameError").text("Username must be at least 2 characters");
            $("#usernameError").show();
            isValid = false;
        }
        else {
            $("#usernameError").hide();
        }

        // Validate Password
        if (password === "") {
            $("#passwordError").show();
            isValid = false;
        }
        else if (password.length < 6) {
            $("#passwordError").text("Password must be at least 6 characters");
            $("#passwordError").show();
            isValid = false;
        } 
        else {
            $("#passwordError").hide();
        }

        // If all inputs are valid, proceed with login
        if (isValid) {
            // Remove existing username display if present
            let existingUsername = $("#usernameDisplay");
            if (existingUsername.length) {
                existingUsername.remove();
            }

            // Create and append new <li> element for the username
            let newUsernameLi = $("<li id='usernameDisplay'><a>Welcome, " + username + "</a></li>");
            $("nav ul li:nth-child(3)").after(newUsernameLi); // Insert after the 3rd item (index 2)

            // Change login button text to "logout" and show it
            $("#login").text("logout");

            // Remove the register button
            $("#register").remove();

            alert("Logged In successfully😊!");
        }
    });

    $("#login").click(function() {
        if ($("#login").text().trim() === "logout") {
            $("#login").text("login");
        }
    });
    
    // -------------------------------------login page validation ends here -----------------------------------------


    // b. Register Page - Hide error message div initially
    $("#ErrorMessage").hide();

    // User class definition
    class User {
        constructor(firstName, lastName, username, email, password) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.username = username;
            this.email = email;
            this.password = password;
        }
    }

    // Handle form submission
    $("#registerForm").submit(function (event) {
        event.preventDefault(); 

        // Get form values
        let firstName = $("#firstName").val().trim();
        let lastName = $("#lastName").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();
        let confirmPassword = $("#confirmPassword").val().trim();

        let isValid = true;
        let errorMessage = "";

        // Validate First Name (min length of 2 characters)
        if (firstName.length < 2) {
            errorMessage += "First Name must be at least 2 characters long.<br>";
            isValid = false;
        }

        // Validate Last Name (min length of 2 characters)
        if (lastName.length < 2) {
            errorMessage += "Last Name must be at least 2 characters long.<br>";
            isValid = false;
        }

        // Validate Email (min length of 8 and contains '@')
        if (email.length < 8 || !email.includes("@")) {
            errorMessage += "Email must be at least 8 characters and contain '@'.<br>";
            isValid = false;
        }

        // Validate Password (at least 6 characters)
        if (password.length < 6) {
            errorMessage += "Password must be at least 6 characters long.<br>";
            isValid = false;
        }

        // Validate Confirm Password (must match Password)
        if (confirmPassword !== password) {
            errorMessage += "Password and Confirm Password must match.<br>";
            isValid = false;
        }

        // If there are errors, display the message
        if (!isValid) {
            $("#ErrorMessage").html(errorMessage).show();
        } else {
            // Hide error message and proceed
            $("#ErrorMessage").hide();
            // Create an instance of the User class
            let user = new User(firstName, lastName, username, email, password);
            // Clear the form fields
            $("#registerForm")[0].reset();
            
            alert("Registration successful!");
        }
    });

    
});
