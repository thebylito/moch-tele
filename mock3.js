const request = require('request')
const { url, loopInfinito } = require('./util')

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const plusOrMinus = () => Math.random() < 0.5 ? -1 : 1
let sensor1 = 30
let sensor2 = 30

const req = async (sen1, sen2) => new Promise(async (resolve, reject) => {
  var options = {
    method: 'POST',
    url: `${url}/api/Monitoramento/InserirMonitoramento`,
    headers:
    { 'Content-Type': 'application/json' },
    body:
    {
      id: '1',
      typeData: 'reader',
      equipmentId: 'motor1',
      'dataLeitura': new Date().toLocaleString(),
      'typeSensor': '4-20',
      sensor:
      {
        s1: sen1,
        s2: sen2,
        s3: 0,
        s4: 0,
        s5: 0,
        s6: 0,
        s7: 0
      }
    },
    json: true
  }

  await request(options, (error, response) => {
    if (error) return reject(new Error(error))
    sensor1 = (getRandomInt(0, 1) * plusOrMinus()) + sensor1
    sensor2 = (getRandomInt(0, 1) * plusOrMinus()) + sensor2
    return resolve(response)
  })
})

if (loopInfinito) {
  setInterval(async () => {
    const res = await req(sensor1, sensor2)
    console.log(res.statusCode)
  }, 1000)
} else {
  (async () => {
    await req(sensor1, sensor2)
    // process.exit(0)
  })()
}
