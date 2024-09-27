//Desafio 1: Soma de Números Pares

// Define a função que recebe um número 'n' e calcula a soma de números pares de 1 até 'n'
function somaNumerosPares(n) {
    // Variável para armazenar a soma dos números pares
    let soma = 0;
    // Variável de controle do loop, começando em 1
    let i = 1;
  
    // Enquanto 'i' for menor ou igual a 'n', continue o loop
    while (i <= n) {
      // Se 'i' for um número par (divisível por 2), adiciona à soma
      if (i % 2 === 0) {
        soma += i;
      }
      // Incrementa o valor de 'i' em 1
      i++;
    }
  
    // Retorna o valor final da soma
    return soma;
  }
  
  // Exibe o resultado da soma de números pares até 10
  console.log(somaNumerosPares(10)); 
  



//Desafio 2: Fatorial de um Número

// Define a função que recebe um número 'n' e calcula o fatorial de 'n'
function fatorial(n) {
    // Inicializa a variável 'resultado' com 1, pois o fatorial de 1 é 1
    let resultado = 1;
  
    // Loop que vai de 1 até 'n'
    for (let i = 1; i <= n; i++) {
      // Multiplica o resultado pelo valor atual de 'i'
      resultado *= i;
    }
  
    // Retorna o resultado final do fatorial
    return resultado;
}
  
// Exibe o resultado do fatorial de 5
console.log(fatorial(5)); 




  
//Desafio 3: Tabuada de um Número

// Define a função que recebe um número 'n' e exibe sua tabuada de 1 a 10
function tabuada(n) {
    // Loop que vai de 1 até 10
    for (let i = 1; i <= 10; i++) {
      // Exibe no console a multiplicação de 'n' por 'i'
      console.log(`${n} x ${i} = ${n * i}`);
    }
}
  
// Chama a função para exibir a tabuada do número 5
tabuada(5); 




  
  //Desafio 4: Validação de Senha

  // Define a senha válida que será comparada
const senhaValida = "12345";

// Define a função para validar a senha
function validarSenha() {
    // Variável para armazenar a senha inserida pelo usuário
    let senha;
  
    // Loop que continua até que a senha inserida seja igual à senha válida
    do {
      // Solicita ao usuário que insira a senha
      senha = prompt("Insira a senha:");
    } while (senha !== senhaValida); // Continua enquanto a senha não for válida
  
    // Exibe no console uma mensagem indicando que a senha está correta
    console.log("Senha correta!");
}
  
// Chama a função de validação de senha
validarSenha(); 




 // Desafio 5: Desenhar um Triângulo de Asteriscos

// Define a função que recebe um número 'n' e desenha um triângulo de asteriscos
function desenharTriangulo(n) {
    // Loop que vai de 1 até 'n'
    for (let i = 1; i <= n; i++) {
      // Exibe 'i' asteriscos na linha atual
      console.log("*".repeat(i));
    }
}
  
// Chama a função para desenhar um triângulo de 5 linhas
desenharTriangulo(5); 



  
  //Desafio 6: Contar Números Positivos e Negativos

  // Define a função que recebe uma lista de números e conta quantos são positivos e negativos
function contarPositivosNegativos(lista) {
    // Variáveis para armazenar a contagem de números positivos e negativos
    let positivos = 0;
    let negativos = 0;
  
    // Loop que percorre cada número na lista
    for (let numero of lista) {
      // Se o número for maior que 0, incrementa a contagem de positivos
      if (numero > 0) {
        positivos++;
      } else if (numero < 0) { // Se for menor que 0, incrementa a contagem de negativos
        negativos++;
      }
    }
  
    // Retorna um objeto contendo as contagens de positivos e negativos
    return { positivos, negativos };
}
  
// Exibe no console o resultado da contagem para a lista [1, -2, 3, -4, 5]
console.log(contarPositivosNegativos([1, -2, 3, -4, 5])); 




  //Desafio 7: Encontrar o Maior Número em uma Lista

  // Define a função que recebe uma lista e encontra o maior número
function maiorNumero(lista) {
    // Inicializa 'maior' com o primeiro número da lista
    let i = 0;
    let maior = lista[0];
  
    // Loop que percorre a lista
    while (i < lista.length) {
      // Se o número atual for maior que 'maior', atualiza o valor de 'maior'
      if (lista[i] > maior) {
        maior = lista[i];
      }
      // Incrementa o índice 'i'
      i++;
    }
  
    // Retorna o maior número encontrado
    return maior;
}
  
// Exibe no console o maior número da lista [1, 9, 3, 7, 5]
console.log(maiorNumero([1, 9, 3, 7, 5])); 




  //Desafio 8: Inverter a Ordem de uma Lista

// Define a função que recebe uma lista e retorna uma nova lista com os elementos em ordem inversa
function inverterLista(lista) {
    // Inicializa uma lista vazia para armazenar os elementos invertidos
    let listaInvertida = [];
  
    // Loop que percorre a lista de trás para frente
    for (let i = lista.length - 1; i >= 0; i--) {
      // Adiciona cada elemento da lista original à lista invertida
      listaInvertida.push(lista[i]);
    }
  
    // Retorna a lista invertida
    return listaInvertida;
}
  
// Exibe no console a lista invertida de [1, 2, 3, 4, 5]
console.log(inverterLista([1, 2, 3, 4, 5])); 




 //Desafio 9: Contar a Frequência de um Elemento em uma Lista

 // Define a função que recebe uma lista e um elemento, e conta quantas vezes o elemento aparece na lista
function contarFrequencia(lista, elemento) {
    // Inicializa a contagem com 0
    let contagem = 0;
  
    // Loop que percorre cada item da lista
    for (let item of lista) {
      // Se o item for igual ao elemento procurado, incrementa a contagem
      if (item === elemento) {
        contagem++;
      }
    }
  
    // Retorna a contagem do elemento
    return contagem;
}
  
// Exibe no console a frequência do número 2 na lista [1, 2, 2, 3, 2, 4]
console.log(contarFrequencia([1, 2, 2, 3, 2, 4], 2)); 




//Desafio 10: Média de Números em uma Lista

// Define a função que recebe uma lista de números e calcula a média
function calcularMedia(lista) {
    // Inicializa a soma dos números com 0
    let soma = 0;
  
    // Loop que percorre cada número na lista e soma os valores
    for (let numero of lista) {
      soma += numero;
    }
  
    // Retorna a média dividindo a soma pelo número de elementos na lista
    return soma / lista.length;
}
  
// Exibe no console a média dos números na lista [1, 2, 3, 4, 5]
console.log(calcularMedia([1, 2, 3, 4, 5])); 
