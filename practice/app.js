const url = 'https://icanhazdadjoke.com'
const btn = document.querySelector('.btn')
const li = document.querySelector('#list')
btn.addEventListener('click', async () => {
  const config = { headers: { Accept: 'application/json' } }
  const resp = await axios.get(url, config)
  const joke = resp.data.joke
  const singleLi = document.createElement('li')
  singleLi.append(joke)
  li.append(singleLi)
})
