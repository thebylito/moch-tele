const request = require('request');

const serial = '10102050';

const url = 'http://localhost:50332';

const meusSensores = ['s2', 's3'];


(async () => {
  const options = {
    method: 'GET',
    url: `${url}/api/monitoramento/dadosplaca/${serial}`,
    headers:
      { 'Content-Type': 'application/json' },
    json: true
  };
  await request(options, (error, response) => {
    console.log(response.body)

    /*     meusSensores.map(sensor => {
    
          console.log(response.body[sensor])
        }) */
  });
}
)()