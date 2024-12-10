"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//classe estabelecimento onde definimos como serao nossos atributos e metedos 
var Estabelecimento = /** @class */ (function () {
    function Estabelecimento(endereco, setor, produtos) {
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
    }
    Estabelecimento.prototype.retornaNomesDosProdutos = function () {
        return this.produtos.map(function (produto) { return produto.nome; });
    };
    return Estabelecimento;
}());
//classe de Farmacia onde se segue a estrutura de um estabelecimento
var Farmacia = /** @class */ (function () {
    function Farmacia(endereco, setor, remedios) {
        this.endereco = endereco;
        this.setor = setor;
        this.remedios = remedios;
    }
    Farmacia.prototype.retornaNomesDosProdutos = function () {
        return this.remedios.map(function (remedio) { return remedio.nome; });
    };
    return Farmacia;
}());
// aqui eu me aproveito da estrutura do estabalecimento  para criar uma padaria 
var padaria = new Estabelecimento("Rua sao jose", "alimentaçao", [
    { nome: "pao", valor: 1.0 },
    { nome: "sonho", valor: 4.5 },
]);
console.log(padaria);
console.log(padaria.retornaNomesDosProdutos());
var farmacia1 = new Farmacia('rua dos anjos', 'saude', [{ nome: 'dipirona', valor: 5 }]);
console.log(farmacia1);
console.log(farmacia1.retornaNomesDosProdutos());
//---------jeito menos estruturado ------------
// class Estabelicemento {
//   private endereco: string;
//   private setor: string;
//   private produto: Produto[];
//   constructor(endereco: string, setor: string, produto: Produto[]) {
//     this.endereco = endereco;
//     this.setor = setor;
//     this.produto = produto;
//   }
// }
