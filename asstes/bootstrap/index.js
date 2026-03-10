const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fas fa-times" : "ri-menu-3-line"
);
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu- line");
});

const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 2000, 
};

scrollReveal().reveal(".header__container h1",{
    ...scrollRevealOptions, 
    delay: 1000,
});
scrollReveal().reveal(".header__container p",{
    ...scrollRevealOptions, 
    delay: 2000,
});
scrollReveal().reveal(".header__container .header__btn",{
    ...scrollRevealOptions, 
    delay: 3000,
});
scrollReveal().reveal(".socials li",{
    ...scrollRevealOptions, 
    delay: 4000,
    interval:500,
});


