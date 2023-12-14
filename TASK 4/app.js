// Simulated user database (for demonstration purposes)
const users = [];

// Function to register a new user
function registerUser(username, password) {
    // Simulate password hashing with a placeholder function
    const hashedPassword = hashPassword(password);
    
    // Store user information
    users.push({ username, password: hashedPassword });
}

// Function to hash the password (using a placeholder function)
function hashPassword(password) {
    // Use a secure hashing library like bcrypt in a real-world scenario
    return password; // Placeholder - Replace with actual hashing logic
}

// Function to authenticate user login
function loginUser(username, password) {
    const user = users.find(u => u.username === username);

    if (user && user.password === hashPassword(password)) {
        return true; // Authentication successful
    }

    return false; // Authentication failed
}

// Event listener for the login button
document.getElementById("login-btn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (loginUser(username, password)) {
        document.getElementById("error-message").innerText = "Login successful!";
        // Redirect to the secured page or perform additional actions for authenticated users
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password";
    }
});

// Example registration
registerUser("testuser", "testpassword");