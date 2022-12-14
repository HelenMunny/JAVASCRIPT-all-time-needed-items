import {people,container,btn} from './utilities/utils.js'
const showPeople = () => {
 const newPeople = people.map((person) => {
  const { name, job } = person;
  return `<p>${name}, <strong> ${job} </strong> </p>`
 }).join('');
 container.innerHTML = newPeople;
};

btn.addEventListener('click', () => {
 showPeople();
});