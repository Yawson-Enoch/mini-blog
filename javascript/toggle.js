let toggleMenu = document.querySelector(".fas.fa-bars");
// console.log(toggleMenu);

let navBar = document.querySelector("nav");
// console.log(navBar);

toggleMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
