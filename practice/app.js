// function setBackToDefault() {
//  input.value = "";
//  submitBtn.textContent = "Submit";
//  window.location.reload();
// }



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
  element.innerHTML = `<p class="itemName">${input.value}</p>
  <div class="buttons">
   <button class="editBtn">edit</button>
   <button class="deleteBtn">delete</button>
  </div>`
  groceryList.appendChild(element);
 } else if (value && edit === true) {
  console.log('editing....')
 } else if (!value) {
  showAlert('Please add an item!', 'red');
  setBackToDefault();
 }
 // if (value !== "") {
 //  const element = document.createElement('article');
 //  element.classList.add('groceryItem');
 //  element.innerHTML = `<p class="itemName">${input.value}</p>
 //  <div class="buttons">
 //   <button class="editBtn">edit</button>
 //   <button class="deleteBtn">delete</button>
 //  </div>`
 //  groceryList.appendChild(element);
 //  input.value = "";

 //  const editBtn = document.querySelector('.editBtn');
 //  const deleteBtn = document.querySelector('.deleteBtn');
  
 //  editBtn.addEventListener('click', function (e) {
 //   const item = e.currentTarget.parentElement.previousElementSibling;
 //   // input.value = element;
 //   submitBtn.innerHTML = 'Edit';
 //   input.value = item.textContent;
 //  })
 // } else if (value === ""){
 //  alert.textContent = "Please add an item!";
 //  alert.style.color = "red";
 //  setTimeout(function () {
 //   alert.style.display = 'none';
 //   setBackToDefault();
 //  },2000)
 // }
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
}