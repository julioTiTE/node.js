//Desafio 1: Determinador de Vogal ou Consoante
function verificarLetra(letra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    if (vogais.includes(letra.toLowerCase())) {
        console.log(`A letra ${letra} é uma vogal`);
    } else {
        console.log(`A letra ${letra} é uma consoante`);
    }
}




//Desafio 2: Tradutor de Dias da Semana
function traduzirDia(diaEmIngles) {
    switch (diaEmIngles.toLowerCase()) {
        case 'monday':
            console.log("Segunda-feira");
            break;
        case 'tuesday':
            console.log("Terça-feira");
            break;
        case 'wednesday':
            console.log("Quarta-feira");
            break;
        case 'thursday':
            console.log("Quinta-feira");
            break;
        case 'friday':
            console.log("Sexta-feira");
            break;
        case 'saturday':
            console.log("Sábado");
            break;
        case 'sunday':
            console.log("Domingo");
            break;
        default:
            console.log("Dia inválido");
    }
}




//Desafio 3: Desconto Progressivo
function calcularPrecoFinal(precoOriginal, categoria) {
    let desconto = 0;
    switch (categoria) {
        case 1:
            desconto = 0.10;
            break;
        case 2:
            desconto = 0.20;
            break;
        case 3:
            desconto = 0.30;
            break;
        case 4:
            desconto = 0.40;
            break;
        default:
            desconto = 0;
    }

    const precoFinal = precoOriginal - (precoOriginal * desconto);
    console.log(`Preço Original: R$${precoOriginal.toFixed(2)}, Desconto: ${desconto * 100}%, Preço Final: R$${precoFinal.toFixed(2)}`);
}



//Desafio 4: Classificação de Idade

function classificarIdade(idade) {
    if (idade >= 0 && idade <= 12) {
        console.log("Criança");
    } else if (idade >= 13 && idade <= 17) {
        console.log("Adolescente");
    } else if (idade >= 18 && idade <= 64) {
        console.log("Adulto");
    } else if (idade >= 65) {
        console.log("Idoso");
    } else {
        console.log("Idade inválida");
    }
}




//Desafio 5: Conversor de Notas em Letras
function converterNota(nota) {
    if (nota >= 90 && nota <= 100) {
        console.log("Nota em letra: A");
    } else if (nota >= 80 && nota < 90) {
        console.log("Nota em letra: B");
    } else if (nota >= 70 && nota < 80) {
        console.log("Nota em letra: C");
    } else if (nota >= 60 && nota < 70) {
        console.log("Nota em letra: D");
    } else if (nota >= 0 && nota < 60) {
        console.log("Nota em letra: F");
    } else {
        console.log("Nota inválida");
    }
}


//Desafio 6: Calculadora de Nota de Participação
function calcularNotaParticipacao(totalAulas, aulasParticipadas) {
    const percentualParticipacao = (aulasParticipadas / totalAulas) * 100;

    if (percentualParticipacao === 100) {
        console.log(10);
    } else if (percentualParticipacao > 75) {
        console.log(8);
    } else if (percentualParticipacao > 50) {
        console.log(6);
    } else {
        console.log(0);
    }
}


//Desafio 7: Calculadora de Desconto Progressivo 2.0

function calcularDescontoProgressivo(precoOriginal) {
    let desconto = 0;
    
    if (precoOriginal <= 100) {
        desconto = 0.05;
    } else if (precoOriginal <= 500) {
        desconto = 0.10;
    } else {
        desconto = 0.15;
    }
    
    const valorDesconto = precoOriginal * desconto;
    const precoFinal = precoOriginal - valorDesconto;
    
    console.log(`Preço original: R$ ${precoOriginal.toFixed(2)}`);
    console.log(`Desconto: R$ ${valorDesconto.toFixed(2)}`);
    console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);
}


//Desafio 8: Classificação de IMC (Índice de Massa Corporal)
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    
    let classificacao;
    
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }
    
    console.log(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);
}


//Desafio 9: Classificação de Ano Bissexto
function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        console.log(`O ano ${ano} é bissexto.`);
    } else {
        console.log(`O ano ${ano} não é bissexto.`);
    }
}


//Desafio 10: Validação de Login

function validarLogin(username, senha) {
    if (username === 'admin' && senha === '1234') {
        console.log("Login permitido: true");
    } else {
        console.log("Login permitido: false");
    }
}



//Desafio 11: Validação de Horário de Funcionamento


function verificarHorarioFuncionamento(diaSemana, horaAtual) {
    diaSemana = diaSemana.toLowerCase();

    if (diaSemana === 'domingo') {
        console.log("A loja está aberta: false");
    } else if (diaSemana === 'sábado' && horaAtual >= 9 && horaAtual <= 14) {
        console.log("A loja está aberta: true");
    } else if ((diaSemana !== 'sábado' && diaSemana !== 'domingo') && horaAtual >= 9 && horaAtual <= 18) {
        console.log("A loja está aberta: true");
    } else {
        console.log("A loja está aberta: false");
    }
}


//Desafio 12: Verificador de Código Promocional

function verificarCodigoPromocional(codigo, valorCompra) {
    let desconto = 0;

    if (codigo === "DESC10" && valorCompra > 50) {
        desconto = 0.10;
    } else if (codigo === "PROMO20" && valorCompra > 50) {
        desconto = 0.20;
    } else {
        console.log("Código inválido ou compra insuficiente");
        return;
    }

    const valorFinal = valorCompra - (valorCompra * desconto);
    console.log(`Valor final com desconto: R$${valorFinal.toFixed(2)}`);
}

