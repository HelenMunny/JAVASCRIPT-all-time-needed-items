let heading1 = document.querySelector('.one');
let heading2 = document.querySelector('.two');
let heading3 = document.querySelector('.three');
let btn = document.querySelector('.btn');
let imgContainer = document.querySelector('.imgContainer');
let url = 'https://source.unsplash.com/random/honey-bee'


btn.addEventListener('click', async () => {
 try {
  await addColor(heading1, 'red', 1000);
  await addColor(heading2, 'green', 1000);
  await addColor(heading3, 'blue', 1000);
 }
 catch (err) {
  console.log(err);
 }
 
})

function addColor(element, color,time) {
 return new Promise((resolve, reject) => {
  if (element) {
   setTimeout(() => {
    element.style.color = color;
    resolve();
   },time)
  }
  else  {
   reject(new Error(`there is no such ${element} . failed to load`));
  }
 })

}



