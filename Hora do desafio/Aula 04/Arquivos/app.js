const Livro = require('./livro');

// Criando dois livros com diferentes atributos
const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
const livro2 = new Livro("1984", "George Orwell", 1949);

// Exibindo as informações dos livros
console.log("Informações do Livro 1:");
livro1.exibirInformacoes();
console.log();

console.log("Informações do Livro 2:");
livro2.exibirInformacoes();
console.log();

// Tentando emprestar o livro1
console.log("Tentando emprestar o Livro 1...");
livro1.emprestar();
console.log();

// Exibindo novamente as informações dos livros para verificar a disponibilidade
console.log("Informações do Livro 1 após emprestar:");
livro1.exibirInformacoes();
console.log();

console.log("Informações do Livro 2 após emprestar Livro 1:");
livro2.exibirInformacoes();
console.log();

// Tentando devolver o livro1
console.log("Tentando devolver o Livro 1...");
livro1.devolver();
console.log();


console.log("Informações do Livro 1 após devolver:");
livro1.exibirInformacoes();
