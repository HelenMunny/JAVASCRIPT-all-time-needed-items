const fs = require('fs')

const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf8' })
const ws = fs.createWriteStream('./files/newLorem.txt')

rs.pipe(ws)

// creating a directory
fs.mkdir('./dir', (err) => {
  if (err) {
    throw err
  }
  console.log('directory created')
})
// if a directory exists, then do not create it.. and if it does not exist, create it   ++++ if a directory exists, remove it. if it does not exist create it
if (!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) {
      throw err
    }
    console.log('directory created')
  })
}

if (fs.existsSync('./new')) {
  fs.rmdir('./new', (err) => {
    if (err) {
      throw err
    }
    console.log('directory removed')
  })
}
