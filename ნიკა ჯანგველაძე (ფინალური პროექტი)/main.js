const hamburger = document.querySelector('.fa-bars');
const nav = document.querySelector('nav ul');


hamburger.addEventListener(".click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})