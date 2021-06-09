

let navToggle = document.querySelector(".nav-toggle");
let navLinks = document.querySelector(".nav-links");
let nav = document.querySelector("#nav");


let navExpand = false;
navToggle.addEventListener('click', function () {
 if (!navExpand) {
  navLinks.classList.add('show');
  nav.style.height = 'auto';
  navExpand = true;
 } else {
  navLinks.classList.remove('show');
  nav.style.height = '80px';
  navExpand = false;
 }
});