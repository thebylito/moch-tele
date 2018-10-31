const readline = require('readline')
readline.emitKeypressEvents(process.stdin)
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
console.log('Press any key...')
