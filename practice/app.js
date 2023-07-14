const url = 'https://api.tvmaze.com/search/shows?q='
const form = document.querySelector('#form')
const input = document.querySelector('#input')
const section = document.querySelector('.image')
form.addEventListener('submit', async function (e) {
  e.preventDefault()
  const value = input.value
  const resp = await axios.get(`${url}${value}`)
  // const data = resp.data
  const img = document.createElement('IMG')
  img.src = resp.data[0].show.image.medium
  document.body.append(img)
})
