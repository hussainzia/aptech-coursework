const modeBtn = document.querySelector("#mode");
const body = document.body;

modeBtn.addEventListener("click", () => {
    // Swap the classes so only one theme is active at a time
    // (adding classes without removing the old one would leave both on the page).
    const isDark = body.classList.toggle("dark");
    body.classList.toggle("light", !isDark);

    modeBtn.textContent = isDark ? "☀️ Switch to light mode" : "🌙 Switch to dark mode";
    modeBtn.setAttribute("aria-pressed", String(isDark));
    console.log(isDark ? "dark" : "light");
});
