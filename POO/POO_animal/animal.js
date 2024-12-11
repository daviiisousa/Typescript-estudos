"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(t, n, i) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }
    Comunicar() {
        console.log('');
    }
}
exports.default = Animal;
class Cachorro extends Animal {
    constructor(t, n, i, r) {
        super(t, n, i);
        this.raca = r;
    }
    Comunicar() {
        console.log('au au');
    }
}
class Pessoa extends Animal {
    constructor(t, n, i, c) {
        super(t, n, i);
        this.cor = c;
    }
    Comunicar() {
        console.log('Ola');
    }
}
const pessoa1 = new Pessoa('Humano', 'davi', 19, 'branco');
const cachorro1 = new Cachorro('Cachorro', 'bob', 2, 'labrador');
console.log(pessoa1);
pessoa1.Comunicar();
console.log(cachorro1);
cachorro1.Comunicar();
