const url = 'https://course-api.com/javascript-store-single-product';
const productWrapper = document.querySelector('.product-wrapper');
const product = document.querySelector('.product');

const fetchProduct = async () => {
// loading state
product.innerHTML = '<div class="loading"></div>';
 try {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const resp = await fetch(`${url}?id=${id}`);
  if (!resp.ok) {
   throw new Error ('There was an error....')
  }

 const data = await resp.json();
  displayProduct(data);
 }
 catch (error) {
  product.innerHTML = '<p class="error">An error took place.</p>'
  console.log(error.message);
 }
}

function displayProduct(item) {
 // image, title, company, price, color, description
 const { name, price, company, description, colors } = item.fields;
  const { url: img } = item.fields.image[0];
 const formatPrice = price / 100;

 // iterating over colors array to display colors
 const colorList = colors.map((color) => {
  return `<span class="product-color" style="background:${color}"></span>`
 }).join('');
 // change document title dynamically
 document.title = name.toUpperCase();


 product.innerHTML = `<div class="product-wrapper">
 <img src="${img}" alt="gray chairs" class="img">
 <div class="product-info">
  <h3>${name}</h3>
  <h5>${company}</h5>
  <span>$${formatPrice}</span>
  <div class="colors">
   ${colorList}
  </div>
  <p>${description}</p>
  <button class="btn">Add to Cart</button>
 </div>
</div>`
}

fetchProduct()