let nomeHeroi = "Homem-Aranha";
let xpHeroi = 10002;
let nivel = "";


if (xpHeroi >= 10001) {
    nivel = "Radiante"
}

else if (xpHeroi >= 9001) {
    nivel = "Imortal"

} else if (xpHeroi >= 8001) {
    nivel = "Ascendente"


} else if (xpHeroi >= 6001) {
    nivel = "Platina"


} else if (xpHeroi >= 5001) {
    nivel = "Ouro"


} else if (xpHeroi >= 2001) {
    nivel = "Prata"

} else if (xpHeroi >= 1001) {
    nivel = "Bronze"
} else {
    nivel = "Ferro"
}


console.log("O " + nomeHeroi + " é de nivel: " + nivel);