let toggleMenu = document.querySelector(".fas.fa-bars");

let navBar = document.querySelector("nav");

toggleMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
