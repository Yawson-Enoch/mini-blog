"use strict";
const headerNav = document.querySelector('.header-nav');
const headerNavLinks = document.querySelector('.header-nav__links');
const navToggler = document.querySelector('.nav-toggler');
const cancelBtn = document.querySelector('.times');
const hamburgerBtn = document.querySelector('.bars');
const wrapper = document.querySelector('.header > .wrapper');
let heightOfLinksContainer = headerNavLinks.getBoundingClientRect().height;
navToggler.addEventListener('click', () => {
    heightOfLinksContainer = headerNavLinks.getBoundingClientRect().height;
    cancelBtn.classList.toggle('cancel-active');
    let isActive = cancelBtn.classList.contains('cancel-active');
    if (isActive) {
        headerNav.style.height = `${heightOfLinksContainer}px`;
        hamburgerBtn.style.display = 'none';
    }
    else {
        headerNav.style.height = '0px';
        hamburgerBtn.style.display = 'block';
    }
});
// set dynamic year
const yearBox = document.querySelector('.year');
yearBox.innerText = new Date().getUTCFullYear().toString();
