class Heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque = "";

        if (this.tipo === "Habilidade") {
            ataque = "Ataque Corpo a Corpo"
        } else if (this.tipo === "Científico"){
            ataque = "Ataque com Radiação"
        } else if (this.tipo === "Mistico"){
            ataque = "Ataque de Energia"
        } else if (this.tipo === "Tecnologico"){
            ataque = "Ataque com armas"
        } else if (this.tipo === "Mutante"){
            ataque = "Ataque com habilidade unica"
        } else if (this.tipo === "Cosmico"){
            ataque ="Ataque de força cosmica"
        } else {
            ataque = "ataque generico"
        }

        console.log(`O ${this.nome}, da classe ${this.tipo} atacou usando ${ataque}`);
    }

}

let heroi1 = new Heroi ("Homem-Aranha", 30, "Científico")
let heroi2 = new Heroi ("Soldado Invernal", 150, "Habilidade")
let heroi3 = new Heroi ("Doutor Estranho", 50, "Mistico")
let heroi4 = new Heroi ("Homem de Ferro", 60, "Tecnologico")
let heroi5 = new Heroi ("Magneto", 80, "Mutante")
let heroi7 = new Heroi ("Fênix Negra", 100, "Cosmico")

heroi5.atacar();