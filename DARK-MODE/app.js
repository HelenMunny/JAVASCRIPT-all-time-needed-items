const toggleBtn = document.querySelector('.btn');
const articleContainer = document.querySelector('.articles');
import {articles} from './utils.js'

toggleBtn.addEventListener('click', () => {
 document.documentElement.classList.toggle('dark-theme');
});


const articleText = articles.map((article) => {
 const { title, date, length, snippet } = article;

// format date with moment js
 const formatDate = moment(date).format('MMMM Do, YYYY')

 return `<article class="post">
 <h2> ${title} </h2>
 <div class="post-info">
  <span>${formatDate}</span>
  <span>${length}</span>
 </div>
 <p>${snippet}</p>
</article>`
});

articleContainer.innerHTML = articleText.join('');

