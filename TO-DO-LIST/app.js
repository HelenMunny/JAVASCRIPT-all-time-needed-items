
const btnsNew = [
 {
  class: "toDelete move-btn",
  iClass:"far fa-trash-alt",
  title: "delete task",
 },
 {
  class: "toCompleted move-btn",
  iClass:"far fa-check-circle",
  title: "mark as completed",
 },
 {
  class: "toOngoing move-btn",
  iClass:"far fa-clock",
  title: "mark as ongoing",
 }
]

// selecting the items
const alert = document.querySelector(".alert");
const form = document.querySelector(".toDoForm");
const taskInput = document.getElementById('newTask');
const submitBtn = document.querySelector(".addTasks");
const container = document.querySelector(".container");
const newList = document.querySelector(".new");

const moveBtns = document.querySelectorAll(".move-btn");



// on page loading 
// window.addEventListener('DOMContentLoaded', function () {
// })


// submit form
form.addEventListener("submit", addTask);

function addTask(e){
 e.preventDefault();
 const inputValue = taskInput.value;
 if (inputValue == "") {
  const alertText = "Please add a task!";
  alert.innerHTML = alertText;
  alert.style.textAlign = "center";
  alert.style.color = "red";
 } else {
  const li = document.createElement('li');
  let newText = document.createTextNode(display(btnsNew));
  // newText = newText.join("");
  const newVal = li.appendChild(newText);
  newList.appendChild(newVal);
 }
}
function display(items) {
 const inputValue = taskInput.value;
let displayBtns = items.map(function (item) {
  return `${inputValue}
 <span class=${item.class}><i class=${item.iClass} title=${item.title}></i></span>`
 })
 displayBtns = displayBtns.join("");
}
console.log(display(btnsNew));