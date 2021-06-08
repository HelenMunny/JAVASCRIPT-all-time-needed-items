let score = document.querySelector("#score");
let btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(function (btn) {
 btn.addEventListener('click', function (e) {
  let currBtn = e.currentTarget.classList;
  if (currBtn.contains('decrease-btn')) {
   count--;
   score.textContent = count;
  } else if (currBtn.contains('increase-btn')) {
   count++;
   score.textContent = count;
  } else {
   count = 0;
   score.textContent = count;
   score.style.color = "wheat";
  }


  if (count < 0) {
   score.style.color = "red";
  } else if (count>0) {
   score.style.color = "yellowgreen";
  } else if(count==0) {
   score.style.color = "wheat";
  }
 });
});