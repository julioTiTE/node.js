class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = true; // Inicialmente, todos os livros estão disponíveis
    }

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            console.log(`O livro "${this.titulo}" foi emprestado.`);
        } else {
            console.log(`O livro "${this.titulo}" não está disponível.`);
        }
    }

    devolver() {
        this.disponivel = true;
        console.log(`O livro "${this.titulo}" foi devolvido.`);
    }

    exibirInformacoes() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano de Publicação: ${this.anoPublicacao}`);
        console.log(`Disponível: ${this.disponivel ? "Sim" : "Não"}`);
    }
}

module.exports = Livro;
