const container = document.querySelector('.container');
const url = 'https://course-api.com/javascript-store-products'
const btns = document.querySelectorAll('.btn');


const fetchProducts = async(url) => {
 container.innerHTML = '<div class="loading">Loading...</div>';
 try {
  const resp = await fetch(url);
  const data = await resp.json();
  // console.log(data)
  return data;
  }
  catch (error) {
   container.innerHTML = '<h2 class="error">An error took place.</h2>'
   console.log(error.message);
  }

}

 
const displaySelected = (list,comName="") => {
 const products = list.map((item) => {
  const { id } = item;
  const { company, name, price } = item.fields;
  const finalPrice = price / 100;
  const { url: img } = item.fields.image[0];
  
   if(comName===company){return `<a href="product.html" class="product-details">
   <div><img src="${img}" alt="${name}"></div>
   <div class="details"><h3 class="name">${name} <span>${finalPrice}</span></h3>
    <h4 class="company">${company}</h4></div>
  </a>`} 
   
 }).join('');
 container.innerHTML = `<div class="single-product">
 ${products}
</div>`
}

// display all
const displayAll = (list) => {
 const products = list.map((item) => {
  const { id } = item;
  const { company, name, price } = item.fields;
  const finalPrice = price / 100;
  const { url: img } = item.fields.image[0];
   return `<a href="product.html" class="product-details">
   <div><img src="${img}" alt="${name}"></div>
   <div class="details"><h3 class="name">${name} <span>${finalPrice}</span></h3>
    <h4 class="company">${company}</h4></div>
  </a>`
 }).join('');
 container.innerHTML = `<div class="single-product">
 ${products}
</div>`
}

window.addEventListener('DOMContentLoaded', () => {
 fetchProducts(url).then((data) => {
  displayAll(data);
 })
})

btns.forEach((btn) => {
 btn.addEventListener('click', (e) => {
  const company = e.currentTarget.dataset.company;
  // all
  if (company === 'all') {
   fetchProducts(url).then((data) => {
    displayAll(data);
   })
  }
  // ikea
  if (company === 'ikea') {
   fetchProducts(url).then((data) => {
    displaySelected(data,company);
   })
  }
   // macros
   if (company === 'marcos') {
    fetchProducts(url).then((data) => {
     displaySelected(data,company);
    })
  }
  // liddy
  if (company === 'liddy') {
   fetchProducts(url).then((data) => {
    displaySelected(data,company);
   })
  }
  // caressa
  if (company === 'caressa') {
   fetchProducts(url).then((data) => {
    displaySelected(data,company);
   })
  }


 })
})


// fetchProducts(url);