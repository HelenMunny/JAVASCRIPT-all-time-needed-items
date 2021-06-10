

let navToggle = document.querySelector(".nav-toggle");
let navLinks = document.querySelector(".nav-links");
let nav = document.querySelector("#nav");


let navExpand = false;
navToggle.addEventListener('click', function () {
 if (!navExpand) {
  navLinks.classList.add('show');
  nav.style.height = 'auto';
  navToggle.innerHTML = '<i class="fa fa-2x fa-times" aria-hidden="true"></i>';
  navToggle.style.color='rgb(59, 32, 133)'
  navExpand = true;
 } else {
  navLinks.classList.remove('show');
  nav.style.height = '80px';
  navToggle.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
  navExpand = false;
 }
});