document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const primaryNav = document.querySelector(".primary-nav");

    navToggle.addEventListener("click", () => {
        primaryNav.toggleAttribute("data-visible");
    });

});