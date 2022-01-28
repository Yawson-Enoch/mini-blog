const headerNav = document.querySelector('.header-nav') as HTMLElement;
const headerNavLinks = document.querySelector(
  '.header-nav__links'
) as HTMLUListElement;
const navToggler = document.querySelector('.nav-toggler') as HTMLDivElement;
const cancelBtn = document.querySelector('.times') as HTMLDivElement;
const hamburgerBtn = document.querySelector('.bars') as HTMLDivElement;
const wrapper = document.querySelector('.header > .wrapper');

let heightOfLinksContainer = headerNavLinks.getBoundingClientRect().height;

navToggler.addEventListener('click', () => {
  heightOfLinksContainer = headerNavLinks.getBoundingClientRect().height;
  cancelBtn.classList.toggle('cancel-active');
  let isActive = cancelBtn.classList.contains('cancel-active');

  if (isActive) {
    headerNav.style.height = `${heightOfLinksContainer}px`;
    hamburgerBtn.style.display = 'none';
  } else {
    headerNav.style.height = '0px';
    hamburgerBtn.style.display = 'block';
  }
});

// set dynamic year
const yearBox = document.querySelector('.year') as HTMLSpanElement;
yearBox.innerText = new Date().getUTCFullYear().toString();
