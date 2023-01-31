// select
let form = document.querySelector('.form');
let submitBtn = document.querySelector('.submitBtn');
let input = document.querySelector('#item');
let alert = document.querySelector('.alert');
let groceryField = document.querySelector('.groceryField');
let groceryList = document.querySelector('.groceryList');
let groceryItem = document.querySelector('.groceryItem');
let clearBtn = document.querySelector('.clearBtn');

// edit option
let editElement;
let edit = false;
let editID = "";


// load items
window.addEventListener('DOMContentLoaded', setupItems);


form.addEventListener('submit', function (e) {
 e.preventDefault();
 const value = input.value;
 const id = new Date().getTime().toString();

 if (value && edit === false) {
  createListItem(id, value);
  // display alert
  showAlert('Item successfully added!', '#9ACD32');
  // add to local storage
  addToLocalStorage(id,value); 
  // set back to default
  setBackToDefault();
 } else if (value && edit === true) {
  editElement.innerHTML = value;
  showAlert('Item successfullt edited!', '#9ACD32');
  // edit local storage
  editLocalStorage(editID, value);

  setBackToDefault();
 } else if (!value) {
  showAlert('Please add an item!', 'red');
  setBackToDefault();
 }

})

// clear items
clearBtn.addEventListener('click', function () {
 const items = document.querySelectorAll('.groceryItem');
 if (items.length > 0) {
  items.forEach(item => {
   groceryList.removeChild(item);
  })
 }
 groceryField.classList.remove('showContainer');
 showAlert('All items removed from the list!', 'red');
 setBackToDefault();

 // remove from local storage
localStorage.removeItem('list');
})
// functions
let showAlert = (text, color) => {
 alert.innerHTML = text;
 alert.style.color = color;
 setTimeout(function () {
  alert.textContent = "";
  // alert.style.display = 'none';   (eta dile ekbarer por r alert show korbe na)
 }, 2000)
}

let setBackToDefault = () => {
 input.value = "";
 submitBtn.textContent = "Submit";
 edit = false;
 editID = "";
}

function deleteItem(e) {
 const item = e.currentTarget.parentElement.parentElement;
 const id = item.dataset.id;
 item.remove();
 const items = document.querySelectorAll('.groceryItem');
 if (items.length <= 0) {
  groceryField.classList.remove('showContainer');
 }
 showAlert('Item removed!', 'red');
 setBackToDefault();

 // delete from local storage
 removeFromLocalStorage(id);
}
function editItem(e) {
 const currItem = e.currentTarget.parentElement.parentElement;
 editElement = e.currentTarget.parentElement.previousElementSibling;
 edit = true;
 editID = currItem.dataset.id;
 submitBtn.innerHTML = 'Edit';
 input.value = editElement.textContent;
}


// local storage
function addToLocalStorage(id, value) {
 const grocery = { id: id, value: value };
 let items = JSON.parse(localStorage.getItem('list')) || [];
 items.push(grocery);
 localStorage.setItem('list', JSON.stringify(items));
 console.log(items);
}
function removeFromLocalStorage(id) {
 let items = JSON.parse(localStorage.getItem('list')) || [];
 items = items.filter(function (item) {
  if (item.id !== id) {
   return item;
  }
 })
 localStorage.setItem('list', JSON.stringify(items));
}
// function editLocalStorage(id, value) {
//  let items = JSON.parse(localStorage.getItem('list')) || [];
//  items = items.map(function (item) {
//   if (item.id === id) {
//    item.value = value;
//   } 
//    return item;
//  })
//  localStorage.setItem('list', JSON.stringify(items));
// }

function editLocalStorage(id, value) {
 let items = JSON.parse(localStorage.getItem('list')) || [];
 items = items.filter(function (item) {
  if (item.id === id) {
   item.value = value;
  } 
  return item;
 })
 localStorage.setItem('list', JSON.stringify(items));
}

// item load from local storage

function setupItems() {
 let items = JSON.parse(localStorage.getItem('list')) || [];
 if (items.length > 0) {
  items = items.forEach(function (item) {
   createListItem(item.id, item.value);
  })
 }
}

// create list item
function createListItem(id, value) {
 const element = document.createElement('article');
  element.classList.add('groceryItem');
  // add id
  const attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="itemName">${value}</p>
  <div class="buttons">
   <button class="editBtn">edit</button>
   <button class="deleteBtn">delete</button>
  </div>`
 groceryList.appendChild(element);
 
 const deleteBtn = element.querySelector('.deleteBtn');
  const editBtn = element.querySelector('.editBtn');

  // edit and delete
  editBtn.addEventListener('click', editItem);
 deleteBtn.addEventListener('click', deleteItem);
 
 groceryField.classList.add('showContainer');
}
