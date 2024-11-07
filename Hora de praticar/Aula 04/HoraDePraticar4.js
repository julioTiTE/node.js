//Exercício 1: Calculadora de Área de Retângulo

// Função que calcula a área de um retângulo
function calcularArea(largura, altura) {
    // Retorna a multiplicação da largura pela altura
    return largura * altura;
}

// Exemplo de uso da função
const largura = 5;
const altura = 10;
console.log(`Área do retângulo: ${calcularArea(largura, altura)}`);


//Exercício 2: Conversor de Tempo

// Função que converte horas e minutos para segundos
function converterParaSegundos(horas, minutos) {
    // Converte horas para segundos (1 hora = 3600 segundos)
    const segundosHoras = horas * 3600;
    // Converte minutos para segundos (1 minuto = 60 segundos)
    const segundosMinutos = minutos * 60;
    // Retorna a soma dos segundos das horas e minutos
    return segundosHoras + segundosMinutos;
}

// Exemplo de uso da função
const horas = 1;
const minutos = 30;
console.log(`Tempo em segundos: ${converterParaSegundos(horas, minutos)}`);


//Exercício 3: Média de números em um array

// Função que calcula a média dos números em um array
function calcularMedia(numeros) {
    // Calcula a soma de todos os elementos do array
    const soma = numeros.reduce((total, num) => total + num, 0);
    // Divide a soma pela quantidade de elementos para obter a média
    return soma / numeros.length;
}

// Exemplo de uso da função
const numeros = [10, 20, 30, 40, 50];
console.log(`Média dos números: ${calcularMedia(numeros)}`);


//Exercício 4: Maior número em um array

// Função que encontra o maior número em um array
function encontrarMaior(numeros) {
    // Utiliza o método Math.max para encontrar o maior valor
    return Math.max(...numeros);
}

// Exemplo de uso da função
const numeros = [5, 12, 8, 22, 18];
console.log(`Maior número: ${encontrarMaior(numeros)}`);


//Exercício 5: Verifica se um número é primo
// Função que verifica se um número é primo
function ehPrimo(numero) {
    // Números menores ou iguais a 1 não são primos
    if (numero <= 1) return false;
    // Verifica se o número tem divisores além de 1 e ele mesmo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    // Se não tiver divisores, é primo
    return true;
}

// Exemplo de uso da função
const numero = 7;
console.log(`${numero} é primo? ${ehPrimo(numero)}`);


//Exercício 6: Classe Pessoa com métodos de saudação

// Definição da classe Pessoa
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome; // Atributo nome
        this.idade = idade; // Atributo idade
    }

    // Método que exibe uma saudação com o nome da pessoa
    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Exemplo de uso da classe
const pessoa = new Pessoa('Maria', 25);
pessoa.cumprimentar();



//Exercício 7: Classe Retângulo para calcular área e perímetro

// Definição da classe Retangulo
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura; // Atributo largura
        this.altura = altura; // Atributo altura
    }

    // Método que calcula a área do retângulo
    calcularArea() {
        return this.largura * this.altura;
    }

    // Método que calcula o perímetro do retângulo
    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }
}

// Exemplo de uso da classe
const retangulo = new Retangulo(5, 10);
console.log(`Área: ${retangulo.calcularArea()}`);
console.log(`Perímetro: ${retangulo.calcularPerimetro()}`);


//Exercício 8: Classe Aluno com notas e cálculo de média


// Definição da classe Aluno
class Aluno {
    constructor(nome, notas) {
        this.nome = nome; // Atributo nome
        this.notas = notas; // Atributo array de notas
    }

    // Método que calcula a média das notas do aluno
    calcularMedia() {
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }
}

// Exemplo de uso da classe
const aluno = new Aluno('João', [8, 7, 9, 10]);
console.log(`Média de ${aluno.nome}: ${aluno.calcularMedia()}`);


//Exercício 9: Classe ContaBancaria com depósitos e saques

// Definição da classe ContaBancaria
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular; // Atributo titular
        this.saldo = saldo; // Atributo saldo
    }

    // Método para depositar um valor
    depositar(valor) {
        this.saldo += valor;
    }

    // Método para sacar um valor, desde que seja possível
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log('Saldo insuficiente.');
        }
    }

    // Método que exibe o saldo atual
    exibirSaldo() {
        console.log(`Saldo atual de ${this.titular}: ${this.saldo}`);
    }
}

// Exemplo de uso da classe
const conta = new ContaBancaria('Pedro', 500);
conta.depositar(200);
conta.sacar(100);
conta.exibirSaldo();


//Exercício 10: Classe Turma com lista de alunos

// Definição da classe Turma
class Turma {
    constructor(nome) {
        this.nome = nome; // Atributo nome da turma
        this.alunos = []; // Lista de alunos
    }

    // Método para adicionar um aluno na turma
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    // Método para listar todos os alunos da turma
    listarAlunos() {
        console.log(`Alunos da turma ${this.nome}:`);
        this.alunos.forEach(aluno => {
            console.log(aluno);
        });
    }
}

// Exemplo de uso da classe
const turma = new Turma('Turma A');
turma.adicionarAluno('Maria');
turma.adicionarAluno('João');
turma.listarAlunos();
