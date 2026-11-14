// Front-end login demo.
// NOTE: real apps must check passwords on a server. Anything in client-side
// JavaScript (like the demo account below) can be read by every visitor.
const DEMO_EMAIL = "zaid@gmail.com";
const DEMO_PASSWORD = "123";

function getvalue() {
    const email = document.querySelector("#email").value.trim();
    const pass = document.querySelector("#password").value.trim();
    const message = document.querySelector("#message");

    if (email === DEMO_EMAIL && pass === DEMO_PASSWORD) {
        message.textContent = "Login successful! Redirecting…";
        message.className = "message success";
        // The page name must be a string. Without quotes, JS looks for a variable called `home`.
        setTimeout(() => window.location.assign("home.html"), 800);
    } else {
        message.textContent = "Incorrect email or password. Please try again.";
        message.className = "message error";
    }
}

// Let the user press Enter instead of clicking the button.
document.querySelector("#login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    getvalue();
});
