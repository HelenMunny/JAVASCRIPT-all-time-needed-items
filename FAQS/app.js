// initial situation when window loads
let expandBtn = document.querySelectorAll(".qsn-expand");
let collapseBtn = document.querySelectorAll(".qsn-collapse")
let qsnAns = document.querySelectorAll(".qsn-ans");
 
window.addEventListener('DOMContentLoaded', function () {
 qsnAns.forEach(hideAns);
 collapseBtn.forEach(hideBtn);
});

function hideAns(item) {
 item.classList.add('hide-ans');
}
function hideBtn(item) {
 item.classList.add('hide-btn');
}

// when button is clicked
let questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
 let expandBtn = question.querySelector(".qsn-expand");
 let collapseBtn = question.querySelector(".qsn-collapse");
 let qsnAns = question.querySelector(".qsn-ans");

 expandBtn.addEventListener('click', function () {
  expandBtn.classList.toggle('hide-btn');
  collapseBtn.classList.toggle('hide-btn');
  qsnAns.classList.toggle('hide-ans');
 })

 collapseBtn.addEventListener('click', function () {
  expandBtn.classList.toggle('hide-btn');
  collapseBtn.classList.toggle('hide-btn');
  qsnAns.classList.toggle('hide-ans');
 })
});



