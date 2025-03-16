$(document).ready(function () {
    // a. Login Page - Insert username in navbar after Contact Us link
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        let username = $("#username").val().trim();
        let password = $("#password").val().trim();

        if (username && password) {
            // Remove existing username if present
            $("#usernameDisplay").remove();
            // Insert new username
            $("<li id='usernameDisplay' class='navbar-text' style='margin-left: 10px; font-weight: bold;'>Welcome, " + username + "</li>").insertAfter("nav ul li:nth-child(3)");
        } else {
            alert("Please enter a valid username and password.");
        }
    });

    // b. Register Page - Hide error message div initially
    $("#ErrorMessage").hide();

    $("#registerForm").submit(function (event) {
        event.preventDefault(); // f. Prevent form submission
        let firstName = $("#firstName").val().trim();
        let lastName = $("#lastName").val().trim();
        let email = $("#email").val().trim();
        let password = $("#passwordRegister").val();
        let confirmPassword = $("#confirmPassword").val();
        let errorMessage = "";

        // c. First and Last Name validation (minimum 2 characters)
        if (firstName.length < 2 || lastName.length < 2) {
            errorMessage += "First and Last Name must be at least 2 characters.<br>";
        }

        // d. Email validation (minimum length 8 and must contain '@')
        if (email.length < 8 || !email.includes("@")) {
            errorMessage += "Email must be at least 8 characters and contain '@'.<br>";
        }

        // e. Password validation (must match & be at least 6 characters)
        if (password.length < 6) {
            errorMessage += "Password must be at least 6 characters.<br>";
        }
        if (password !== confirmPassword) {
            errorMessage += "Passwords do not match.<br>";
        }

        // Display error messages if any
        if (errorMessage) {
            $("#ErrorMessage").html(errorMessage).show();
        } else {
            $("#ErrorMessage").hide();

            // g. User Class - Create and store user object
            class User {
                constructor(firstName, lastName, email, password) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.email = email;
                    this.password = password;
                }
            }

            // h. Create a User instance and log to console
            let newUser = new User(firstName, lastName, email, password);
            console.log(newUser);

            // Clear the form after successful validation
            $("#registerForm")[0].reset();
        }
    });
});
