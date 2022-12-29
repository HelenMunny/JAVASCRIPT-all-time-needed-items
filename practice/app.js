const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');
const url = "https://source.unsplash.com/random";

btn.addEventListener('click', async() => {
 try {
  const img = await loadImage(url);
 await container.appendChild(img);
 } catch (error){
  console.log(error);
 }

 try {
  await changeColor(red, 'red', 1000);
  await changeColor(green, 'green', 1000);
  await changeColor(blue, 'blue', 1000);
 } catch (error){
  console.log(error);
 }
})

function loadImage(url) {
 const promise = new Promise((resolve,reject) => {
  let img = new Image();
  img.src = url;
  img.addEventListener('load', () => {
   resolve(img);
  })
  img.addEventListener('error', () => {
   reject(new Error('failed to load image from the url'));
  })
 })
 return promise;
}

function changeColor(el,color,time) {
 const promise = new Promise((resolve, reject) => {
  if (el) {
   setTimeout(() => {
    el.style.color = color;
    resolve();
   }, time);
  } else {
   reject(new Error('there is no such element'));
  }
 })
 return promise;
}