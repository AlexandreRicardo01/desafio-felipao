// 1. Criamos a função que recebe vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    // Cálculo do saldo
    let heroi = "Homem-Aranha";
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // 2. Estrutura de decisão para definir o nível baseado nas VITÓRIAS
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornamos a frase formatada
    return `O ${heroi} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}


let resultado = calcularNivel(90,100); 
console.log(resultado);