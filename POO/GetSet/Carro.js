"use strict";
class Carro {
    constructor(marca, preco, cor) {
        this.marca = marca;
        this.preco = preco;
        this.cor = cor;
    }
    ligarCarro() {
        console.log('vrummmm');
    }
    //mas aqui eu posso coletar os nomes
    getMarca() {
        return this.marca;
    }
    //e aqui eu posso alteralo 
    setValor(valor) {
        this.preco = valor;
    }
}
const carro1 = new Carro('chevrolet', 100.500, 'vermelho');
console.log(carro1);
carro1.setValor(5000);
console.log(carro1);
carro1.ligarCarro();
