let reviews = [
 {
  id: 1,
  img: "images/person-1.jpg",
  name: "David Marjo",
  position: "Senior Software Developer",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, inventore ad. Magnam veritatis qui laborum?",
 },

 {
  id: 2,
  img: "images/person-2.jpg",
  name: "Mari D'costa",
  position: "UX Designer",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, inventore ad.",
 },

 {
  id: 3,
  img: "images/person-3.jpg",
  name: "Jouni Sipola",
  position: "Game Developer",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, inventore ad. Magnam veritatis qui laborum?",
 },

 {
  id: 4,
  img: "images/person-4.jpg",
  name: "Sonya Stela",
  position: "Android Developer",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, inventore ad. Magnam veritatis qui laborum?",
 },
]

// selecting items
let img = document.querySelector("#img");
let myName = document.querySelector("#name");
let position = document.querySelector("#position");
let description = document.querySelector("#description");
let slideLeft = document.querySelector(".slide-left");
let slideRight = document.querySelector(".slide-right");
let randomBtn = document.querySelector(".random-btn");


// person details
function personDetails(num) {
 let item = reviews[num];
 img.src = item.img;
 myName.textContent = item.name;
 position.textContent = item.position;
 description.textContent = item.description;
}

// loading initial item
let currItem = 0;
window.addEventListener('DOMContentLoaded', function () {
 personDetails(currItem);
})

// slide next

slideRight.addEventListener('click', function () {
 currItem++;

 if (currItem > reviews.length - 1) {
  currItem = 0;
 }
 personDetails(currItem);
})
// slide previous
slideLeft.addEventListener('click', function () {
 currItem--;

 if (currItem < 0) {
  currItem = reviews.length-1;
 }
 personDetails(currItem);
})


// random review
function getRandomNumber() {
 return Math.floor(Math.random()*reviews.length);
}
randomBtn.addEventListener('click', function () {
 personDetails(getRandomNumber());
})

