const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile('./files/lorem.txt', 'utf8')
    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      data
    )

    // for deleting a file
    await fsPromises.unlink(path.join(__dirname, 'files', 'promiseWrite.txt'))

    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      '\n\nNice to meet you!!'
    )
    await fsPromises.rename(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      path.join(__dirname, 'files', 'promiseRenamed.txt')
    )

    const newData = await fsPromises.readFile(
      path.join(__dirname, 'files', 'promiseRenamed.txt'),
      'utf8'
    )
    console.log(newData)
  } catch (err) {
    console.log(err)
  }
}
fileOps()

// exit on uncaught errors
process.on('uncaughtException', (err) => {
  console.error(`There is an uncaught error: ${err}`)
  process.exit(1)
})
