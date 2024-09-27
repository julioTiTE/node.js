 // Função que calcula a idade com base no ano de nascimento
function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

// Função para verificar as condições de acesso
function verificarAcesso(anoNascimento, contaAtiva, restricaoCredito, sistemaManutencao) {
    const idade = calcularIdade(anoNascimento);

    if (idade >= 18 && contaAtiva && (!restricaoCredito || sistemaManutencao === false)) {
        return "Acesso concedido";
    } else {
        return "Acesso negado";
    }
}

// Exemplo de uso:
const anoNascimento = 2003; // Ano de nascimento do cliente
const contaAtiva = true; // A conta está ativa (true ou false)
const restricaoCredito = false; // O cliente tem restrição de crédito? (true ou false)
const sistemaManutencao = false; // O sistema está em manutenção? (true ou false)

const resultado = verificarAcesso(anoNascimento, contaAtiva, restricaoCredito, sistemaManutencao);
console.log(resultado); // "Acesso concedido"
