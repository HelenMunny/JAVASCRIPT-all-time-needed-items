const fs = require('fs')
const path = require('path')
fs.readFile(
  path.join(__dirname, 'files', 'starter.txt'),
  'utf8',
  (err, data) => {
    if (err) throw err
    console.log(data)
  }
)

// write new file
// append new file: this will create new file if the file already doesn't exist. it will append text if the file is already existed. it's better to place this function inside write file function. as it will append text in the same file. it will ultimately create callback hells... functions inside functions.... one insed another...
fs.writeFile(
  path.join(__dirname, 'files', 'new.txt'),
  'new text adding up',
  (err) => {
    if (err) {
      throw err
    }
    console.log('write completed')
    fs.appendFile(
      path.join(__dirname, 'files', 'new.txt'),
      'appending text',
      (err) => {
        if (err) {
          throw err
        }
        console.log('append completed')
      }
    )
  }
)
// append file

// exit on uncaught errors
process.on('uncaughtException', (err) => {
  console.error(`There is an uncaught error: ${err}`)
  process.exit(1)
})
