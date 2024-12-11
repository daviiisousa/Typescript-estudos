"use strict";
class Pessoa {
    constructor(cor, idade, nome, hobbie) {
        this.cor = cor;
        this.idade = idade;
        this.nome = nome;
        this.hobbie = hobbie;
    }
}
class Loja {
    constructor(endereco, setor, produtos, funcionario) {
        if (produtos.length === 0) {
            console.log(' a loja deve ter pelo menos um produto');
        }
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
        this.funcionarios = funcionario;
    }
    listarProdutos() {
        return this.produtos.map(produto => produto.nome);
    }
    getFuncioanarios() {
        return this.funcionarios;
    }
    adicionarFuncionarios(novoFuncinario) {
        this.funcionarios = novoFuncinario;
    }
    getProdutos() {
        return this.produtos;
    }
}
const joao = new Pessoa('Negro', 22, 'joao', 'pintar');
const pedro = new Pessoa('branco', 25, 'Pedro', 'dancar');
const Loja2Irmao = new Loja('Rua bem ali', 'alimentos', [{ nome: 'pao', preco: 1 }], [joao]);
Loja2Irmao.adicionarFuncionarios([pedro]);
console.log(Loja2Irmao.getFuncioanarios);
console.log(joao);
console.log(Loja2Irmao);
