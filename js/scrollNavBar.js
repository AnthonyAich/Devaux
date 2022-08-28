//onccroll
window.onscroll = function () {
    //onscroll picture index
    let left = document.querySelector('#scrollableImage');
    let uitbaatster = document.querySelector('#uitbaatster');
    //when uitbaatster is in viewport block left from being fixed
    if (uitbaatster.getBoundingClientRect().top < window.innerHeight) {
        left.style.position = 'absolute';
        left.style.top = window.innerHeight + "px";
    } else {
        left.style.position = 'fixed';
        left.style.top = "0px";
    }


    //onscroll navbar
    let navbar = document.querySelector('header');
    let topItem = document.querySelector('.imgKlein');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let navbarTop = topItem.getBoundingClientRect().top;
    console.log(navbarTop);
    let miniLogo = document.querySelector('.navLittleLogo')
    //when navbar not on top get background color
    if (navbarTop == 0) {
        navbar.style.backgroundColor = "rgba(250, 250, 250, 0.0)";
        navbar.style.backdropFilter = "blur(0px)";

        miniLogo.style.display = "none";

    } else {
        navbar.style.backgroundColor = "rgba(55, 53, 54, 0.7)";
        navbar.style.backdropFilter = "blur(5px)";
        miniLogo.style.display = "block";
    }

}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}