document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const primaryNav = document.querySelector(".primary-nav");

    navToggle.addEventListener("click", () => {
        primaryNav.toggleAttribute("data-visible");
        primaryNav.hasAttribute("data-visible")
        ? navToggle.children[0].src = "assets/images/closeIcon.png"
        : navToggle.children[0].src = "assets/images/menuIcon.png";
    });

});