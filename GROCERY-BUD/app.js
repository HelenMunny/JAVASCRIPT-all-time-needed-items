

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

  // edit and delete //here because, element has been added dynamically. it's not present in the html. so we can edit or delete an item from the list only when we have access to them. or only when the item has been added to the list.
  const deleteBtn = element.querySelector('.deleteBtn');
  const editBtn = element.querySelector('.editBtn');

  editBtn.addEventListener('click', editItem);
  deleteBtn.addEventListener('click', deleteItem);

  
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
  editElement.innerHTML = value;
  displayAlert('Item Edited!', 'green');

  // edit local storage
  editLocalStorage(editID, value);
  setBackToDefault();
 }
 else if (!value){
  displayAlert('Please Enter an item!', 'red');
  setBackToDefault();
 }
})

// clear items
clearBtn.addEventListener('click', clearItems)

function clearItems() {
 const items = document.querySelectorAll('.groceryItem');

 if (items.length > 0) {
  items.forEach(function (item) {
   list.removeChild(item);
   setBackToDefault();
  });

  groceryContainer.classList.remove('show');
  displayAlert('Empty List!', 'red');
  localStorage.removeItem('list');
 }
}

// functions.......................

// display alert
function displayAlert(text, color) {
 alert.innerHTML = text;
 alert.style.color = color;
 // remove alert after sometime
 setTimeout(function () {
  alert.innerHTML = '';
 },2000)
}




// set back to default
function setBackToDefault() {
 input.value = "";
 edit = false;
 editID = "";
 submitBtn.textContent = 'submit';
}

// edit & delete Item
function editItem(e){
 const currItem = e.currentTarget.parentElement.parentElement;
 editElement = e.currentTarget.parentElement.previousElementSibling;
 input.value = editElement.innerHTML;
 submitBtn.textContent = 'Edit';
 edit = true;
 editID = currItem.dataset.id;
};
function deleteItem(e){
 const items = document.querySelectorAll('.groceryItem');
 const currItem = e.currentTarget.parentElement.parentElement;
 const id = currItem.dataset.id;
 list.removeChild(currItem);
 setBackToDefault();
 displayAlert('Item removed', 'red');
 if (list.children.length === 0) {
  groceryContainer.classList.remove('show');
 }

 // remove from local storage
 removeFromLocalStorage(id);
};


// LOCAL STORAGE...........................

// add to local storage
function addToLocalStorage(id, value) {
 const grocery = {
  id: id,
  value:value
}
}
// remove from local storage
function removeFromLocalStorage(id) {
 console.log('item removed from local storage');
}

// edit local storage
function editLocalStorage(id, value) {
 
}