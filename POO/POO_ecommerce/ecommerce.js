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
    constructor(nome, idade) {
        super(nome, idade);
        this.nome = nome;
        this.idade = idade;
        this.produtoDocliente = [];
    }
    dizerBomdia() {
        console.log(`Ola bom dia, me chamo ${this.nome}`);
    }
    adcionarProduto(produto) {
        this.produtoDocliente.push(...produto);
    }
    listarProdutosDoCliente() {
        return this.produtoDocliente;
    }
}
class Loja {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.clentesDaLoja = [];
        this.produtosDaLoja = [];
        this.nome = nome;
        this.endereco = endereco;
    }
    novoCliente(cliente) {
        this.clentesDaLoja.push(...cliente);
    }
    novoProduto(produto) {
        this.produtosDaLoja.push(...produto);
    }
    listarProdutos() {
        return this.produtosDaLoja.map(p => p.nome);
    }
}
const joao = new Cliente('Joso', 32);
joao.adcionarProduto([{ nome: 'pao', preco: 14 }, { nome: 'cerveja', preco: 21 }]);
const produtosDoJoao = joao.listarProdutosDoCliente();
console.log(joao);
console.log(produtosDoJoao);
const bemAqui = new Loja('mercado bem aqui', 'rua da lama');
const noovoCliente = bemAqui.novoCliente([joao]);
const novoProduto = bemAqui.novoProduto(produtosDoJoao);
console.log(bemAqui);
