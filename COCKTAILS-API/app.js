const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const section = document.querySelector('.section');
const sectionCenter = document.querySelector('.section-center');
const title = document.querySelector('.title');
const loading = document.querySelector('.loading');
const form = document.querySelector('.search-form');
const input = document.querySelector('[name="drink"]');

// console.log(form)

window.addEventListener('DOMContentLoaded', () => {
 fetchCocktails(url);
})



const fetchCocktails = async(url) => {
 loading.classList.remove('hide-loading');
 try {
 const resp = await fetch(url);
  const data = await resp.json();
  display(data);
 }
 catch (error) {
  // section.innerHTML = '<h2>An error took place</h2>';
  console.log(error);
 }
}


const display = ({drinks}) => {
 // const allDrinks = [...drinks];
 if (!drinks) {
  sectionCenter.innerHTML = null;
  title.innerHTML = `Sorry! No drinks matched your search.`;
  // hide loading
  // loading.classList.add('hide-loading');
  return;
 }
 const newDrinks = drinks.map((item) => {
 // id, name, image
  const { idDrink: id, strDrink: name, strDrinkThumb: img } = item;

  return `<a href="drink.html">
  <article class="cocktail" data-id="${id}">
  <img src="${img}" alt="${name}">
  <h3>${name}</h3>
  </article>
 </a>`
 }).join('');
 section.innerHTML = newDrinks;
 return section;
}

form.addEventListener('keyup', function(e){
 e.preventDefault();
 const value = input.value;
 const finalUrl = `${baseUrl}${value}`;
 if (!value) { return; }
 fetchCocktails(finalUrl);
 // console.log(finalUrl);
})
