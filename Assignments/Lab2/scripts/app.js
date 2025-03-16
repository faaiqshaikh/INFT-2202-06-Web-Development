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

});
