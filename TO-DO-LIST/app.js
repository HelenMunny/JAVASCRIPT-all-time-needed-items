window.addEventListener('load', function () {
 const form = document.querySelector('form');
const task = document.getElementById('newTask');
const addBtn = document.querySelector('.addTasks');

form.addEventListener('submit', function (e) {
 e.preventDefault();
 
 const taskInput = task.ariaValueMax;
 if (!taskInput) {
  alert('please! add a task!');
  return
 } 
})

// addBtn.addEventListener("click", function() {
//  console.log(taskInput);
// });

})



