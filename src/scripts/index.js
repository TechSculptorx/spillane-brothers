import "../styles/index.scss";

// Navigation hamburger
const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("open");

  setTimeout(() => {
    navLinks.classList.toggle("open");
  }, 200);
});

console.log("Hello, world!");
