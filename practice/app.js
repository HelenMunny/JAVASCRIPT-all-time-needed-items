

const people = [
 { name: 'Helen', job: 'Developer' },
 { name: 'Tony', job: 'Designer' },
 {name:'Monika', job:'Manager'}
]
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

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