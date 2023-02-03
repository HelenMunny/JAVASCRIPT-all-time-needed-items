const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/api.txt')
xhr.onreadystatechange = function () {
 if (xhr.readyState === 4 && xhr.status === 200) {
  const resultTxt = xhr.responseText;
  let paragraph = document.createElement('p');
  paragraph.innerHTML = resultTxt;
  document.body.appendChild(paragraph);
 }
 else {
  console.log({
   status: xhr.status,
   text: xhr.statusText
  })
 }
}
xhr.send();
console.log(xhr)