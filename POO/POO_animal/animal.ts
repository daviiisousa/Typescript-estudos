export default class Animal {
    tipo: string;
    nome: string;
    idade: number;
    constructor(t: string, n: string, i: number) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }

    Comunicar(): void {
        console.log('')
    }
}

class Cachorro extends Animal {
    raca: string;
    constructor(t: string, n: string, i: number, r: string) {
        super(t, n, i)
        this.raca = r
    }
    Comunicar(): void {
        console.log('au au')
    }
}

class Pessoa extends Animal {
    cor: string;
    constructor(t: string, n: string, i: number, c: string) {
        super(t, n, i)
        this.cor = c
    }
    Comunicar(): void {
        console.log('Ola')
    }
}

const pessoa1 = new Pessoa('Humano', 'davi', 19, 'branco')
const cachorro1 = new Cachorro('Cachorro', 'bob', 2, 'labrador')
console.log(pessoa1)
pessoa1.Comunicar()
console.log(cachorro1)
cachorro1.Comunicar()