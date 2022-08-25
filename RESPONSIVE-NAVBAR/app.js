// responsive navbar
let navToggle = document.querySelector(".nav-toggle");
let linksContainer = document.querySelector(".links-container");
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
  navToggle.innerHTML = '<i class="fa fa-bars fa-2x" aria-hidden="true"></i>';
  navExpand = false;
 }
});

// fixed navbar after certain point, and show back to top button after certain point
let topLink = document.querySelector('.top-link');
let navHeight = nav.getBoundingClientRect().height;
let about = document.getElementById('about');
let aboutHeight = about.getBoundingClientRect().height;


window.addEventListener('scroll', function () {
 let windowScroll = window.pageYOffset;
 
 // show top-btn
 let showTopHeight = navHeight + aboutHeight;
 if (windowScroll >showTopHeight) {
  topLink.style.visibility = 'visible';
 } else {
  topLink.style.visibility = 'hidden';
 }

 // fixed navbar
 if (windowScroll > navHeight) {
  nav.classList.add('fixed-nav');
 } else {
  nav.classList.remove('fixed-nav');
 }

})

//  date setup
let date = document.querySelector('.date');
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currDate = new Date();
let currYear = currDate.getFullYear();
let currMonth = months[currDate.getMonth()];
date.innerHTML = `${currMonth.toUpperCase()}, ${currYear}`;


// on-click add active class to the current link
let links = document.querySelectorAll('.link');

links.forEach(function (link) {
 link.addEventListener('click', function (e) {

  // on-click add/remove active class
  links.forEach(function (item) {
   item.classList.remove("current");
  })
  e.currentTarget.classList.add('current');

  // collapse expanded-nav when link is clicked
  navLinks.classList.remove('show');
  nav.style.height = '80px';
  navToggle.innerHTML = '<i class="fa fa-bars fa-2x" aria-hidden="true"></i>';
  navExpand = false;
 })
 
})

// smooth scrolling
let current = 0;
let target = 0;
let ease = 0.01;