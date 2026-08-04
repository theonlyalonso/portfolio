const menu = document.querySelector(".site-menu");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll(".menu-links a");

function openMenu() {
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
menuLinks.forEach(link => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
        closeMenu();
    }
});

document.getElementById("year").textContent = new Date().getFullYear();
