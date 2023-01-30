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

// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


form.addEventListener('submit', function (e) {
 e.preventDefault();
 const value = input.value;
 const id = new Date().getTime().toString();

 if (value && edit === false) {
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

  // show groceryField
  groceryField.classList.add('showContainer');
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
// localStorage.removeItem('list');
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
 editElement = e.currentTarget.parentElement.previousElementSibling;
 edit = true;
 editID = editElement.dataset.id;
 submitBtn.innerHTML = 'Edit';
 input.value = editElement.textContent;
}


// local storage
function addToLocalStorage(id,value) {
 console.log('add to local stprage');
}
function removeFromLocalStorage(id) {
 console.log('removed from local storage');
}
function editLocalStorage(id,value){}