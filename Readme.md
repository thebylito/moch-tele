instalar dependencias: npm i

rodar o arquivo index.js, que simula o nosso serviço.
rodar o arquivo placa.js, simula o que esperamos do request da placa.

GET /monitoramento/dadosplaca/NUMERO-DE-SERIE


Retorno: 

{ sensores:
   { s1:
      { minAlarme: 30,
        maxAlarme: 50,
        minDesarme: 10,
        maxDesarme: 70,
        span: 0,
        offset: 0,
        zero: 0 },
     s2: null,
     s3:
      { minAlarme: 10,
        maxAlarme: 10,
        minDesarme: 20,
        maxDesarme: 30,
        span: 0,
        offset: 0,
        zero: 0 },
     s4:
      { minAlarme: 10,
        maxAlarme: 10,
        minDesarme: 20,
        maxDesarme: 30,
        span: 0,
        offset: 0,
        zero: 0 } 
    } 
}

