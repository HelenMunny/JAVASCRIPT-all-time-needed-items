const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';
const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const btn = document.querySelector('.submit-btn');
const results = document.querySelector('.results');

form.addEventListener('submit', function (e) {
 e.preventDefault();
 const value = input.value;
 const newUrl = `${url}${value}`;
 if (!value) {
  results.innerHTML = `<div class="error">Please enter valid search term</div>`;
  return;
 }

 fetchSearches(newUrl);
})

const fetchSearches = async (url) => {
 results.innerHTML = `<div class="loading"></div>`;
 try {
  const resp = await fetch(url);
  const data = await resp.json();
  const finalResults = data.query.search;
  if (finalResults.length===0) {
   results.innerHTML = `<div class="error">Sorry! No items matched your search!</div>`;
   return;
  }
  display(finalResults);
 }
 catch (error) {
  results.innerHTML = `<div class="error">An error took place</div>`;
 }
}

const display = (list) => {
 // console.log(list)
 if (!list) {
  results.innerHTML = `<div class="error">Sorry! No items matched your search!</div>`;
  return;
 }
 const newItems = list.map((item) => {
  // page id, title, description text
  const { pageid: id, title, snippet: text } = item;
  return `<a href="http://en.wikipedia.org/?curid=${id}" target="_blank">
   <h4>${title}</h4>
   <p>${text}</p>
  </a>`
 }).join('');
 results.innerHTML = `<div class="articles">
 ${newItems}
</div>`;
 return results;
}
// fetchSearches(url);