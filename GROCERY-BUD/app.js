

// select items
const alert = document.querySelector(".alert");
const form = document.querySelector(".groceryForm");
const input = document.querySelector("#item");
const submitBtn = document.querySelector(".submitBtn");
const groceryContainer = document.querySelector(".groceryContainer");
const list = document.querySelector(".groceryList");
const clearBtn = document.querySelector(".clearBtn");

// edit option
let editElement;
let edit = false;
let editID = "";

// event listeners
// submit form
form.addEventListener("submit", function (e) {
 e.preventDefault();
 const value = input.value;
 const id = new Date().getTime().toString();

 if (value && !edit) {
  const element = document.createElement('article');
  element.classList.add('groceryItem');
  // add id dynamically
  const attr = document.createAttribute('data-id');
  attr.value = id;


  element.setAttributeNode(attr);
  element.innerHTML = ` <p class="itemName">${value}</p>
  <div class="btnContainer">
   <button type="button" class="editBtn"><i class="fas fa-edit"></i></button>
   <button type="button" class="deleteBtn"><i class="fas fa-trash"></i></button>
  </div> `;
  
  // append child
  list.appendChild(element);

  // display alert
  displayAlert('Item successfully added to the list!', 'green')

  // show container
  groceryContainer.classList.add('show');

  // add to local storage
  addToLocalStorage(id, value);
  // set back to default
  setBackToDefault();
  }
 else if (value && edit) {
  console.log('editing the item');
 }
 else if (!value){
  displayAlert('Please Enter an item!', 'red');
 }
})

// display alert
function displayAlert(text, color) {
 alert.innerHTML = text;
 alert.style.color = color;
 
 // remove alert after sometime
 setTimeout(function () {
  alert.innerHTML = '';
 },2000)
}


// add to local storage
function addToLocalStorage(id, value) {
 console.log('added to local storage');
}

// set back to default
function setBackToDefault() {
 console.log('set back to default');
}