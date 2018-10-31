// const readline = require('readline')
const arg = process.argv

let url = 'http://localhost:50332'
// let url = 'http://200.181.118.103:8099'
let loopInfinito = false

arg.map((item, i) => {
  switch (item) {
    case '-i':
      loopInfinito = true
      break
    case '--u':
      const query = arg[i + 1] === 'p' ? 'http://telemetriaapi.sanesul.ms.gov.br' : arg[i + 1] === 'h' ? 'http://telemetriaapihml.sanesul.ms.gov.br' : false
      if (query) url = query
      break
    default:
  }
})

console.log(url)

/* readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit()
  } else if (key.name === 'return') {
    console.log('enter')
  } else {
    // console.log(`You pressed the "${str}" key`)
    // console.log(key.name)
    process.stdout.write(key.name)
    // console.log(key)
    // console.log()
  }
})
console.log('Press any key...') */

module.exports = ({ url, loopInfinito })
