let shoes = [
 {
  id: 1,
  category:"women",
   title: "Black Party Shoes",
  price:44.99,
  img:"./images/women-1.jpg",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quo exercitationem non, cupiditate molestiae molestias?",
 },
 {
  id: 2,
  category:"kids",
   title: "Baby Boy's Colorful Shoes",
  price:24.99,
   img:"./images/kid-1.png",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quo exercitationem non, cupiditate molestiae molestias?Lorem ipsum dolor sit amet.",
 },
 {
  id: 3,
  category:"men",
   title: "Men's Yellow Fantasy",
  price:59.99,
   img:"./images/men-1.jpg",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quo exercitationem non.",
 },
 {
  id: 4,
  category:"kids",
   title: "Baby Girl's Cute Pink Shoes",
  price:34.99,
   img:"./images/kid-2.jpg",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quo exercitationem non, cupiditate molestiae molestias?Lorem, ipsum dolor.",
 },
 {
  id: 5,
  category:"kids",
   title: "Baby Girl Cute Shoes",
  price:20.99,
   img:"./images/kid-4.jpg",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quo exercitationem non, cupiditate molestiae molestias?",
 },
 {
  id: 6,
  category:"men",
   title: "Men's Winter Boots",
  price:34.99,
   img:"./images/men-2.png",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quo exercitationem non, cupiditate molestiae molestias?Lorem, ipsum dolor.",
 },
 {
  id: 7,
  category:"women",
   title: "Women's Black Fantasy",
  price:34.99,
   img:"./images/women-2.jpg",
  description:"Lorem ipsum dolor, adipisicing elit. Quidem quo exercitationem non, cupiditate molestiae molestias?Lorem.",
 },
 {
  id: 8,
  category:"men",
   title: "Men Formal Shoes",
  price:99.99,
   img:"./images/men-3.jpg",
  description:"sit amet consectetur adipisicing elit. Quidem quo exercitationem non, cupiditate molestiae molestias?Lorem, ipsum dolor.",
 },
 {
  id: 9,
  category:"women",
   title: "Women's Party Wear",
  price:54.99,
   img:"./images/women-3.jpg",
  description:"Lorem ipsum dolor. Quidem quo exercitationem non, cupiditate molestiae molestias?Lorem, ipsum dolor.",
 },
 {
  id: 10,
  category:"men",
   title: "Men's Winter Boots",
  price:34.99,
   img:"./images/men-4.jpg",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quo exercitationem non, cupiditate molestiae molestias?Lorem, ipsum dolor. Lorem, ipsum dolor.",
 }
]

let itemsContainer = document.querySelector(".items-container");
let womenBtn = document.querySelector(".women-btn");
let menBtn = document.querySelector(".men-btn");
let kidsBtn = document.querySelector(".kids-btn");
let allBtn = document.querySelector(".all-btn");
let btns = document.querySelectorAll(".filter-btn");

window.addEventListener('DOMContentLoaded', function () {
 display(shoes);
})

allBtn.addEventListener('click', function () {
 display(shoes);
 })

womenBtn.addEventListener('click', function () {
 let displayWomen = shoes.filter(function (item) {
  if (item.category == "women") {
   return item;
  }
 })
 display(displayWomen);
});

menBtn.addEventListener('click', function () {
 let displayMen = shoes.filter(function (item) {
  if (item.category == "men") {
   return item;
  }
 })
 display(displayMen);
});

kidsBtn.addEventListener('click', function () {
 let displayKids = shoes.filter(function (item) {
  if (item.category == "kids") {
   return item;
  }
 })
 display(displayKids);
});

function display(item) {
 let displayItems = item.map(function (item) {
  return `<article class="menu-item">
  <img src=${item.img} alt=${item.title} class="menu-photo">
  <div class="item-info">
   <h3>${item.title}  <span class="item-price">$${item.price}</span></h3>
   <p class="item-description">${item.description}</p>
  </div>
 </article>`
 });
 displayItems = displayItems.join("");
 itemsContainer.innerHTML = displayItems;
}


// second and shortest option, READING DATASET PROPERTY


// btns.forEach(function (btn) {
//  btn.addEventListener('click', function (e) {
//   let btnCategory = e.currentTarget.dataset.category;
//   let itemCategory = shoes.filter(function (item) {
//    if (item.category == btnCategory) {
//     return item;
//    }
//   })
//   if (btnCategory == "all") {
//    display(shoes);
//   } else {
//    display(itemCategory);
//   }
//  })
// })


