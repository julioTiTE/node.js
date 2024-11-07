console.log("Início do Programa de contador de tempo -> Seja bem -vindo")


var contador = 10

const mensagem = setInterval(()=>{
    console.log("esta mensagem será exibida " + contador + " vezes")
    contador--
    if(contador==(-1)){
        clearInterval(mensagem)
        console.log("tempo esgotado")
    }
},1000)