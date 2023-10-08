document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are valid (add your own validation logic here)
    if (username === "Nam" && password === "0980105654") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your credentials.");
    }
});