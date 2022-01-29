const headerNav = document.querySelector('.header-nav') as HTMLElement;
const headerNavLinks = document.querySelector(
  '.header-nav__links'
) as HTMLUListElement;
const navToggler = document.querySelector('.nav-toggler') as HTMLDivElement;
const cancelBtn = document.querySelector('.times') as HTMLDivElement;
const hamburgerBtn = document.querySelector('.bars') as HTMLDivElement;

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

const yearBox = document.querySelector('.year') as HTMLSpanElement;
yearBox.innerText = new Date().getUTCFullYear().toString();

const scrollbtn = document.querySelector('.scroll-to-top') as HTMLDivElement;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollbtn.classList.add('show-scroll-to-top');
  } else {
    scrollbtn.classList.remove('show-scroll-to-top');
  }
});

scrollbtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
