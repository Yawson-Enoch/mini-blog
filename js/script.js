let hamburger = document.querySelector(".bars");
let cancel = document.querySelector(".times");
let nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.add("nav-activate");
  hamburger.classList.add("bars-deactivate");
  cancel.classList.add("times-activate");
});

cancel.addEventListener("click", () => {
  nav.classList.remove("nav-activate");
  cancel.classList.remove("times-activate");
  hamburger.classList.remove("bars-deactivate");
});
