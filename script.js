document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("login-modal");
    const signupModal = document.getElementById("signup-modal");
    const loginButton = document.getElementById("login-btn");
    const signupButton = document.getElementById("signup-btn");
    const logoutButton = document.getElementById("logout-btn");
    const closeLogin = document.getElementById("close-login");
    const closeSignup = document.getElementById("close-signup");

    // Fetch stored user data
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const isLoggedInUser = localStorage.getItem("loggedInUser");

    // Update UI for logged-in state
    if (isLoggedInUser) {
        loginButton.style.display = "none";
        signupButton.style.display = "none";
        logoutButton.style.display = "block";
    } else {
        logoutButton.style.display = "none";
    }

    // Open/close modals
    loginButton.addEventListener("click", () => (loginModal.style.display = "block"));
    signupButton.addEventListener("click", () => (signupModal.style.display = "block"));
    closeLogin.addEventListener("click", () => (loginModal.style.display = "none"));
    closeSignup.addEventListener("click", () => (signupModal.style.display = "none"));

    // Signup form handler
    document.getElementById("signup-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("signup-username").value.trim();
        const password = document.getElementById("signup-password").value;

        if (!username || !password) {
            alert("Username and password are required.");
            return;
        }

        if (users[username]) {
            alert("User already exists!");
        } else {
            users[username] = password;
            localStorage.setItem("users", JSON.stringify(users));
            alert("Sign up successful! You can now log in.");
            signupModal.style.display = "none";
        }
    });

    // Login form handler
    document.getElementById("login-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("login-username").value.trim();
        const password = document.getElementById("login-password").value;

        if (!username || !password) {
            alert("Username and password are required.");
            return;
        }

        if (users[username] && users[username] === password) {
            localStorage.setItem("loggedInUser", username);
            alert("Login successful!");
            loginModal.style.display = "none";

            // Update UI
            loginButton.style.display = "none";
            signupButton.style.display = "none";
            logoutButton.style.display = "block";

            location.reload();
        } else {
            alert("Invalid username or password.");
        }
    });

    // Logout handler
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        logoutButton.style.display = "none";
        loginButton.style.display = "block";
        signupButton.style.display = "block";
        location.reload();
    });
});
