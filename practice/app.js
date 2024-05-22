const one = document.querySelector('.one')
const twot = document.querySelector('.two')
const t = document.querySelector('.three')
document.querySelector('#btn').addEventListener('click', async () => {
  await changeColor(one, 1000, 'red')
  await changeColor(twot, 1000, 'blue')
  await changeColor(t, 1000, 'yellow')
})

function changeColor(element, time, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color
        resolve()
      }, time)
    } else {
      reject(new Error(`element not found: ${element}`))
    }
  })
}
