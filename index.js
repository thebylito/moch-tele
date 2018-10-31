const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

/**
 * Primeiro retorno enviado pelo serviço;
 */
const retorno1 = {
    s1: {
        'minAlarme': 30,
        'maxAlarme': 50,
        'minDesarme': 10,
        'maxDesarme': 70,
        'span': 0,
        'offset': 0,
        'zero': 0
    },
    s2: null,
}

/**
 * Segundo retorno enviado pelo serviço;
 */

const retorno2 = {
    s1: {
        'minAlarme': 40,
        'maxAlarme': 60,
        'minDesarme': 20,
        'maxDesarme': 80,
        'span': 0,
        'offset': 0,
        'zero': 0
    },
    s2: {
        'minAlarme': 80,
        'maxAlarme': 120,
        'minDesarme': 60,
        'maxDesarme': 150,
        'span': 0,
        'offset': 0,
        'zero': 0
    },
};

/**
 * 
 * @param {Number} retorno Numero 1 ou 2, retorna valores acima
 * @returns {Object} Dados simulando o serviço.
 */
const retorno = (retorno) => {
    const res = retorno === 1 ? retorno1 : retorno2;
    return {
        sensores: {
            ...res,
            s3: {
                'minAlarme': 10,
                'maxAlarme': 10,
                'minDesarme': 20,
                'maxDesarme': 30,
                'span': 0,
                'offset': 0,
                'zero': 0
            },
            s4: {
                'minAlarme': 10,
                'maxAlarme': 10,
                'minDesarme': 20,
                'maxDesarme': 30,
                'span': 0,
                'offset': 0,
                'zero': 0
            }
        },
    }
}

const numerosDeSerieNoBanco = ["AF56FC87FS94FS", "S5SGF4SFW1WF4"]; // Numero de serie esperado pelo sistema.

/**
 * Na primeira request o valor retornado é o "retorno1",
 *  na segunda request é o "retorno2"
 */
let requestNum = 0; // Request atual;

/**
 * @method GET
 */
app.get('/monitoramento/dadosplaca/:serial', async (req, res) => {
    try {
        const { serial } = req.params
        const placa = numerosDeSerieNoBanco.findIndex(n => n === serial) === -1 ? false : true;
        if (!placa) throw 'Placa não encontrada';
        requestNum++;
        res.json({ data: retorno(requestNum > 1 ? 2 : 1) });
    } catch (e) {
        res.status(401).json({ message: e });
    }
});

app.listen(3000, () => {
    console.log("Ouvindo na porta 3000")
});