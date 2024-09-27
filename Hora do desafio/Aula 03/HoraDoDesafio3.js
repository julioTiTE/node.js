// Array de feedbacks, onde cada elemento é uma string representando um feedback ("positivo", "negativo", "neutro")
const feedbacks = ["positivo", "negativo", "neutro", "positivo", "positivo", "negativo", "neutro", "positivo"];

// Função para analisar os feedbacks recebidos e contar quantos são "positivo", "negativo" e "neutro"
function analisarFeedbacks(feedbacks) {
  // Inicializa variáveis para armazenar a contagem de cada tipo de feedback
  let positivo = 0;  // Contador de feedbacks positivos
  let negativo = 0;  // Contador de feedbacks negativos
  let neutro = 0;    // Contador de feedbacks neutros

  // Loop 'for...of' percorre todos os elementos do array 'feedbacks'
  // O loop captura cada valor (feedback) do array um de cada vez
  for (let feedback of feedbacks) {
    // Verifica se o feedback atual é "positivo"
    if (feedback === "positivo") {
      positivo++;  // Incrementa o contador de positivos
    // Se o feedback for "negativo"
    } else if (feedback === "negativo") {
      negativo++;  // Incrementa o contador de negativos
    // Caso contrário, o feedback é "neutro"
    } else if (feedback === "neutro") {
      neutro++;    // Incrementa o contador de neutros
    }
  }

  // Calcula o número total de feedbacks, utilizando a propriedade 'length' do array
  const totalFeedbacks = feedbacks.length;  // 'feedbacks.length' retorna o total de elementos no array

  // Calcula o percentual de feedbacks positivos:
  // (quantidade de feedbacks positivos / total de feedbacks) * 100 para obter a porcentagem
  const percentualPositivo = ((positivo / totalFeedbacks) * 100).toFixed(2);
  // O método '.toFixed(2)' mantém 2 casas decimais
  // Calcula o percentual de feedbacks negativos:
  const percentualNegativo = ((negativo / totalFeedbacks) * 100).toFixed(2); 
  // O resultado é arredondado para 2 casas decimais
  // Calcula o percentual de feedbacks neutros:
  const percentualNeutro = ((neutro / totalFeedbacks) * 100).toFixed(2); 
  // Novamente, arredondado para 2 casas decimais

  // Exibe o total de feedbacks no console usando 'console.log()'
  console.log(`Total de feedbacks: ${totalFeedbacks}`);
  
  // Exibe a quantidade de feedbacks positivos e seu percentual
  console.log(`Positivos: ${positivo} (${percentualPositivo}%)`);
  
  // Exibe a quantidade de feedbacks negativos e seu percentual
  console.log(`Negativos: ${negativo} (${percentualNegativo}%)`);
  
  // Exibe a quantidade de feedbacks neutros e seu percentual
  console.log(`Neutros: ${neutro} (${percentualNeutro}%)`);
 // Usa o console.log() para exibir uma mensagem no console
 // Início do template literal com crases (permite inserir variáveis dentro de strings)
 // String estática "Neutros: " será exibida diretamente no console
 // O valor da variável `neutro` (quantidade de feedbacks neutros) será inserido aqui
 // `${neutro}` insere o valor da variável `neutro` (ex.: 2)
 // Texto estático que abre os parênteses para o percentual
// O valor da variável `percentualNeutro` (percentual de feedbacks neutros) será inserido aqui
// `${percentualNeutro}` insere o valor da variável (ex.: 25.00)
// O símbolo de porcentagem e fecha os parênteses
// Literal ")%" será impresso depois do valor de `percentualNeutro`

}


// Chama a função 'analisarFeedbacks', passando o array 'feedbacks' como argumento
// Isso inicia a análise e faz com que os resultados sejam exibidos no console
analisarFeedbacks(feedbacks);
