"use strict";
class pessoa {
    //metodo constrtutor(passa o valor)
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    //metodos(funçoes)
    dormir() {
        console.log("zzz");
    }
}
const pessoa1 = new pessoa("davi", 18, 1.76);
const pesoa2 = new pessoa('kaine', 52, 1.64);
console.log(pessoa1);
pessoa1.dormir();
console.log(pesoa2);
