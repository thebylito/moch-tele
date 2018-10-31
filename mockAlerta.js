const request = require('request');

const url = "http://telemetriaapihml.sanesul.ms.gov.br"

let sensor1 = 1;
let sensor2 = 0;

const req = async (sen1, sen2) => {
  var options = {
    method: 'POST',
    url: 'http://localhost:50332/api/Monitoramento/InserirMonitoramento',
    headers:
      { 'Content-Type': 'application/json' },
    body:
    {
      id: '41',
      typeData: 'alert',
      equipmentId: 'motor1',
      "dataLeitura": new Date().toLocaleString(),
      "typeSensor": "4-20",
      sensor:
      {
        s4: sen1,
        s3: sen2,
      }
    },
    json: true
  };

  await request(options, (error, response) => {
    if (error) throw new Error(error);
    console.log(response.statusCode);
  });

}

const arg = process.argv[2] || null;


if (arg == '-i') {
  setInterval(async () => {
    req(sensor1, sensor2)
  }, 1000)
} else {
  req(sensor1, sensor2)
}