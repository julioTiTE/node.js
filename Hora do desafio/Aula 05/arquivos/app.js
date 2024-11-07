const readline = require('readline');
const moment = require('moment');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe uma data no formato DD-MM-YYYY: ', (dataEntrada) => {
    gerenciarEvento(dataEntrada);
    rl.close();
});

function gerenciarEvento(dataEntrada) {
    const data = moment(dataEntrada, 'DD-MM-YYYY');

    if (!data.isValid()) {
        console.log("Data inválida! Por favor, forneça no formato DD-MM-YYYY.");
        return;
    }

    console.log(`Dia da semana: ${data.format('dddd')}`);
    const diasFaltando = data.diff(moment(), 'days');
    console.log(`Faltam ${diasFaltando} dias para essa data.`);
    const novaData = data.add(30, 'days');
    console.log(`Data com 30 dias adicionados: ${novaData.format('DD/MM/YYYY')}`);
}
