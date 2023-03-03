const url = 'https://randomuser.me/api/';
const wrapper = document.querySelector('.wrapper');
const img = document.querySelector('.user-img');
const title = document.querySelector('.user-title');
const value = document.querySelector('.user-value');
const btn = document.querySelector('.btn');
const icons = [...document.querySelectorAll('.icon')];

const fetchUser = async() => {
 // wrapper.innerHTML = '<h2 class="loading">loading...</h2>';
 try {
 const resp = await fetch(url);
  const data = await resp.json();
  displayUser(data);
 }
 catch (error) {
  console.log('an error took place');
 }
}

const displayUser = (person) => {
 // img, name, email, age, street, phone, password
const root = person.results[0]
 const { email, phone } = root;
 const {large:image} = root.picture;
 const {first, last } = root.name;
 const name = `${first} ${last}`;
 const { age } = root.dob;
 const { password } = root.login;
 const { name:streetName, number } = root.location.street;
 const street = `${streetName} ${number}`


 img.src = image;
 title.textContent=`My name is`
 value.textContent = name;

// first remove active class from all btns, because when you click random user button, there will be multiple icons with the active class. so first remove active class from all, and then add active class to the name icon that means icons[0]
 icons.forEach((btn) => { btn.classList.remove('active') });
 icons[0].classList.add('active');


 // info object
 const info =
 {
  image,
  name,
  email,
  age,
  street,
  phone,
  password
 }
 // iterate over icons
 icons.forEach((btn) => {
  const label = btn.dataset.label;
  btn.addEventListener('click', () => {
   value.textContent = info[label];
   title.textContent = `My ${label} is`;
   icons.forEach((btn) => { btn.classList.remove('active') });
   btn.classList.add('active');
  })
 })
}

window.addEventListener('DOMContentLoaded', fetchUser);
btn.addEventListener('click', fetchUser);