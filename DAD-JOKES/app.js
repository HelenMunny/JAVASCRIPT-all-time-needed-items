const url = 'https://icanhazdadjoke.com/';
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
 displayJokes();
})
const displayJokes = async () => {
 result.innerHTML = 'Loading....'
 try {
  const resp = await fetch(url, {
   headers: {
    accept: 'application/json',
    'User-Agent':'learning app'
   }
  });
 
  if (!resp.ok) {
   throw new Error('there was an error');
  }
 
  const data = await resp.json();
  result.innerHTML = data.joke;
 }
 catch (error) {
  console.log(error.message);
  result.innerHTML = 'Error.....'
 }
}

window.addEventListener('load', () => {
 result.innerHTML = displayJokes();
});

