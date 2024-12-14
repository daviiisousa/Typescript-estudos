"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.nome = nome;
        this.idade = idade;
    }
}
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.nome = nome;
        this.preco = preco;
    }
}
class Cliente extends Pessoa {
    constructor(nome, idade, produto) {
        super(nome, idade);
        this.nome = nome;
        this.idade = idade;
        this.produto = produto;
        this.produto = produto;
    }
    dizerBomdia() {
        console.log('bom dia');
    }
}
class TipoDePagemento {
    constructor(credito, dinheiro, debito) {
        this.credito = credito;
        this.dinheiro = dinheiro;
        this.debito = debito;
        this.credito = credito;
        this.debito = debito;
        this.dinheiro = dinheiro;
    }
}
class Loja {
    constructor(cliente, tipoPagamento) {
        this.cliente = cliente;
        this.tipoPagamento = tipoPagamento;
        this.cliente = cliente;
        this.tipoPagamento = tipoPagamento;
    }
}
