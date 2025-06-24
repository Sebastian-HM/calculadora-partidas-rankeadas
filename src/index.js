// Variáveis para inicio do desafio
const nomeHeroi = "Bianca, la Capo cannoniere internazionale!";
console.log("Bem-vinda ao desafio " + nomeHeroi);

let nivelHeroi = (""); // Definido segundo saldo de vitórias

let saldo = subtracao(250, 14)

function subtracao(vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}

// Estrutura de decisão para definir o nível do herói
if (saldo <= 10) {
    nivelHeroi = "Ferro";
} else if (saldo <= 20) {
    nivelHeroi = "Bronze";
} else if (saldo <= 50) {
    nivelHeroi = "Prata";
} else if (saldo <= 80) {
    nivelHeroi = "Ouro";
} else if (saldo <= 90) {
    nivelHeroi = "Diamante";
} else if (saldo <= 100) {
    nivelHeroi = "Lendário";
} else { 
    nivelHeroi = "IMORTAL!!!";
}

// Mensagem final
let mensagem = ("A Heroína " + nomeHeroi + " tem " + saldo + " vitórias e atingiu o nível: " + nivelHeroi);

// Mensagem no console
console.log(mensagem);