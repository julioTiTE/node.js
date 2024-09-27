//1. Cálculo de Média Aritmética
function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    console.log(`Média: ${media.toFixed(2)}`);
}




//2. Cálculo do IMC (Índice de Massa Corporal)

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    console.log(`IMC: ${imc.toFixed(2)}`);
}



//3. Conversão de Unidades de Comprimento

function converterComprimento(metros) {
    const centimetros = metros * 100;
    const milimetros = metros * 1000;
    
    console.log(`${metros} metro(s) é igual a ${centimetros} centímetros`);
    console.log(`${metros} metro(s) é igual a ${milimetros} milímetros`);
}



//Desafio 4:. Conversão de Moedas
function converterMoeda(valorBRL, taxaCambio) {
    const valorUSD = valorBRL / taxaCambio;
    console.log(`R$${valorBRL} é igual a $${valorUSD.toFixed(2)}`);
}


//Desafio 5; Conversão de Horas para Minutos e Segundos
function converterHoras(horas) {
    const minutos = horas * 60;
    const segundos = horas * 3600;
    
    console.log(`${horas} hora(s) é igual a ${minutos} minutos`);
    console.log(`${horas} hora(s) é igual a ${segundos} segundos`);
}


//Desafio 6: Último Dígito de um Número
function ultimoDigito(numero) {
    const digito = numero % 10;
    console.log(`O último dígito de ${numero} é ${digito}`);
}



//Desafio 7: Conversão de Velocidade

function converterVelocidade(kmh) {
    const mps = kmh / 3.6;
    console.log(`${kmh} km/h é igual a ${mps.toFixed(2)} m/s`);
}


//Desafio 8: Cálculo de Juros Simples

function calcularJurosSimples(principal, taxa, tempo) {
    const juros = (principal * taxa * tempo) / 100;
    console.log(`Juros Simples: R$${juros.toFixed(2)}`);
}



//Desafio 9: Conversão de Unidades de Tempo

function converterTempo(dias) {
    const horas = dias * 24;
    const minutos = dias * 1440; // 24 horas * 60 minutos
    const segundos = dias * 86400; // 24 horas * 60 minutos * 60 segundos
    
    console.log(`${dias} dia(s) é igual a ${horas} horas`);
    console.log(`${dias} dia(s) é igual a ${minutos} minutos`);
    console.log(`${dias} dia(s) é igual a ${segundos} segundos`);
}


//Desafio 10: Cálculo de Perímetro e Área de um Retângulo

function calcularPerimetroEAarea(largura, comprimento) {
    const perimetro = 2 * (largura + comprimento);
    const area = largura * comprimento;
    
    console.log(`Perímetro: ${perimetro}`);
    console.log(`Área: ${area}`);
}

