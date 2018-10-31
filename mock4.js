const request = require('request')
const { url, loopInfinito } = require('./util')

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const plusOrMinus = () => Math.random() < 0.5 ? -1 : 1
let sensor1 = 81
let sensor2 = 81

const req = async (sen1, sen2) => {
  var options = {
    method: 'POST',
    url: `${url}/api/Monitoramento/InserirMonitoramento`,
    headers:
      { 'Content-Type': 'application/json' },
    body:
    {
      id: '24',
      typeData: 'reader',
      equipmentId: 'motor1',
      'dataLeitura': new Date().toLocaleString(),
      'typeSensor': '4-20',
      sensor:
      {
        s1: sen1,
        s2: sen2
      }
    },
    json: true
  }

  await request(options, (error, response) => {
    if (error) throw new Error(error)
    sensor1 = (getRandomInt(0, 1) * plusOrMinus()) + sensor1
    sensor2 = (getRandomInt(0, 1) * plusOrMinus()) + sensor2
    console.log(response.statusCode)
  })
}

if (loopInfinito) {
  setInterval(async () => {
    req(sensor1, sensor2)
  }, 1000)
} else {
  req(sensor1, sensor2)
}
