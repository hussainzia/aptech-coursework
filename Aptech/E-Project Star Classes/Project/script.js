// =========================================================
// Star Classes: page interactions
// =========================================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

// ---------- Footer year ----------
$("#year").textContent = new Date().getFullYear();

// ---------- Navbar: shadow on scroll + close the mobile menu after a click ----------
const nav = $(".site-nav");
const mainNav = $("#mainNav");

function closeMobileMenu() {
    if (mainNav.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(mainNav).hide();
    }
}

$$("#mainNav .nav-link, #mainNav .btn").forEach((link) => link.addEventListener("click", closeMobileMenu));

// ---------- Highlight the nav link for the section on screen ----------
const sections = $$("header[id], section[id]");
const navLinks = $$("#mainNav .nav-link");

function updateActiveLink() {
    const offset = window.scrollY + 120;
    let current = sections[0].id;
    sections.forEach((section) => {
        if (section.offsetTop <= offset) current = section.id;
    });
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}

// ---------- Back-to-top button ----------
const backToTop = $("#backToTop");

function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 10);
    backToTop.classList.toggle("show", window.scrollY > 600);
    updateActiveLink();
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Course filtering (category buttons + search box) ----------
const courseItems = $$(".course-item");
const filterButtons = $$("[data-filter]");
const searchForm = $("#courseSearch");
const searchInput = $("#searchInput");
const noResults = $("#noResults");
let activeFilter = "all";

function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    courseItems.forEach((item) => {
        const matchesCategory = activeFilter === "all" || item.dataset.category === activeFilter;
        const matchesQuery = !query || item.textContent.toLowerCase().includes(query);
        item.hidden = !(matchesCategory && matchesQuery);
        if (!item.hidden) visible++;
    });

    noResults.hidden = visible > 0;
}

function setFilter(filter) {
    activeFilter = filter;
    filterButtons.forEach((button) => {
        const isActive = button.dataset.filter === filter;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
    applyFilters();
}

filterButtons.forEach((button) => button.addEventListener("click", () => setFilter(button.dataset.filter)));

// Category cards jump to the courses section with that category selected
$$("[data-category-link]").forEach((card) =>
    card.addEventListener("click", () => {
        searchInput.value = "";
        setFilter(card.dataset.categoryLink);
    })
);

searchInput.addEventListener("input", applyFilters);

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilters();
    closeMobileMenu();
    $("#courses").scrollIntoView();
});

$("#clearSearch").addEventListener("click", () => {
    searchInput.value = "";
    setFilter("all");
});

// ---------- "Enquire now" pre-selects the course in the contact form ----------
const courseSelect = $("#course");
$$("[data-enquire]").forEach((button) =>
    button.addEventListener("click", () => {
        courseSelect.value = button.dataset.enquire;
    })
);

// ---------- Contact form ----------
// This is a static website, so the message isn't sent anywhere yet.
// To receive messages, connect the form to a backend (e.g. PHP) or a form service.
const contactForm = $("#contactForm");
const formStatus = $("#formStatus");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
        contactForm.classList.add("was-validated");
        contactForm.querySelector(":invalid").focus();
        return;
    }

    const name = contactForm.elements.name.value.trim();
    formStatus.textContent = `Thank you, ${name}! We've received your message and will get back to you soon.`;
    formStatus.hidden = false;
    contactForm.reset();
    contactForm.classList.remove("was-validated");
});

// ---------- Newsletter ----------
const newsletterForm = $("#newsletterForm");
const newsletterStatus = $("#newsletterStatus");

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = $("#newsletterEmail");
    if (!email.checkValidity()) {
        newsletterStatus.textContent = "Please enter a valid email address.";
        email.focus();
        return;
    }
    newsletterStatus.textContent = "Thanks for subscribing! 🎉";
    newsletterForm.reset();
});

// ---------- Fade sections in as they scroll into view ----------
const revealItems = $$(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );
    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("visible"));
}
