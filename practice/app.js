const btn = document.querySelector('.btn');
const url = '/api/some.json';


btn.addEventListener('click', async() => {
 const resp = await fetch(url);
 const data = await resp.json();
 displayItems(data);
})

function displayItems(items) {
 const displayData = items.map((item) => {
  const { name } = item;
  return `<p> ${name} </p>`
 }).join('');

 const el = document.createElement('div');
 el.innerHTML = displayData;
 document.body.appendChild(el);
}