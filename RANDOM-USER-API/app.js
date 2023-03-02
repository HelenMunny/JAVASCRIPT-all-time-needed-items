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

const displayUser = (list) => {
 // img, name, 
}

window.addEventListener('DOMContentLoaded', fetchUser);
btn.addEventListener('click', fetchUser);