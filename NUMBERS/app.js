
const elements = [...document.querySelectorAll('.number')];

// helping function
const updateCount = (el) => {
 const value = parseInt(el.dataset.value);
 const increment = Math.ceil(value / 1000);
 let initialValue = 0;

 const increaseCount = setInterval(() => {
  initialValue += increment;

  if (initialValue > value) {
   el.innerHTML = `${value}`;
   clearInterval(increaseCount);
   return;
  }

  el.innerHTML = `${initialValue}+`
 },1);
}
elements.forEach((item) => {
 updateCount(item);
  })

