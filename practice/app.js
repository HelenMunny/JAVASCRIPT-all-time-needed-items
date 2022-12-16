// import {people,container,btn} from './utilities/utils.js'
// const showPeople = () => {
//  const newPeople = people.map((person) => {
//   const { name, job } = person;
//   return `<p>${name}, <strong> ${job} </strong> </p>`
//  }).join('');
//  container.innerHTML = newPeople;
// };

// btn.addEventListener('click', () => {
//  showPeople();
// });

function boilWater() {
 console.log('boiling water.....')
 setTimeout(() => {
  setTimeout(() => {
   console.log('chopping carrots');
  },2000)
  console.log('boiling water is done');
 },5000)
}



boilWater();
console.log('chopping carrots');
