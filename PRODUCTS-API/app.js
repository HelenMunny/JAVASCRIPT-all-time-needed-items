const url = 'https://course-api.com/javascript-store-products';
const productsDOM = document.querySelector('.products-center');


const fetchProducts = async () => {
 productsDOM.innerHTML = '<div class="loading"></div>';
 try {
  const resp = await fetch(url);
  if (!resp.ok) {
   throw new Error ('There was an error....')
  }

 const data = await resp.json();
  displayProducts(data);
 }
 catch (error) {
  productsDOM.innerHTML = '<p class="error">An error took place.</p>'
  console.log(error.message);
 }
}

function displayProducts(list) {
 // console.log(list);
 const finalProducts = list.map((item) => {
  const { id } = item;
  const { name, price } = item.fields;
  const { url: img } = item.fields.image[0];
  const formatPrice = price / 100;

  return `<a href="product.html" class="single-product">
  <img src="${img}" alt="" class="single-product-img img">
  <footer>
   <h5 class="name">${name}</h5>
   <span class="price">$${formatPrice}</span>
  </footer>
 </a>`
 
 }).join('');
 productsDOM.innerHTML = `<div class="products-container">
 ${finalProducts}</div>`;
}

fetchProducts()




