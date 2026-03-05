function toggleExpand(card){
  card.classList.toggle("active");
}
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

/* open/close menu */
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* close menu when clicking any link */
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
