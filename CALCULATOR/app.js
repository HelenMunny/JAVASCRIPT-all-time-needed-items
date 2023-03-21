// selecting the elements

const input = document.querySelector('.screen');
const btns = document.querySelectorAll('.btn');
const equal = document.querySelector('.equal-btn');
const back = document.querySelector('.back-btn');
const clear = document.querySelector('.clear-btn');

btns.forEach((btn) => {
 btn.addEventListener('click', (e) => {
  const value = e.target.dataset.num;
  input.value += value;
 })
})

equal.addEventListener('click', (e) => {
 if (input.value === "") {
  input.value = "";
 } else {
  let answer = eval(input.value);
 input.value = answer;
 }
})
clear.addEventListener('click', (e) => {
 input.value = "";
})
back.addEventListener('click', (e) => {
 let inputStr = input.value; 
 inputStr = inputStr.substring(0, inputStr.length - 1);
 input.value = inputStr;

})

