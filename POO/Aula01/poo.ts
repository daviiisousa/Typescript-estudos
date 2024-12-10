import { Produto, Remedio } from "./Types/Types";

// aqui eu usa um interface para definir a estrutura do estabelecimento 
interface EstabelecimentoInterface {

  //metodo para retorna o nome dos produtos
  retornaNomesDosProdutos: () => string[],

  // atributos do nosso estabelecimento
  endereco: string,
  setor: string,
}

//classe estabelecimento onde definimos como serao nossos atributos e metedos 
class Estabelecimento implements EstabelecimentoInterface {
  constructor(
    public endereco: string,
    public setor: string,
    private produtos: Produto[]
  ) { }

  retornaNomesDosProdutos() {
    return this.produtos.map(produto => produto.nome)
  }
}

//classe de Farmacia onde se segue a estrutura de um estabelecimento
class Farmacia implements EstabelecimentoInterface {
  constructor(
    public endereco: string,
    public setor: string,
    private remedios: Remedio[]
  ){}

  retornaNomesDosProdutos() {
    return this.remedios.map(remedio => remedio.nome)
  }
}

// aqui eu me aproveito da estrutura do estabalecimento  para criar uma padaria 
const padaria = new Estabelecimento("Rua sao jose", "alimentaçao", [
  { nome: "pao", valor: 1.0 },
  { nome: "sonho", valor: 4.5 },
]);
console.log(padaria);
console.log(padaria.retornaNomesDosProdutos());

const farmacia1 = new Farmacia('rua dos anjos', 'saude', [{nome: 'dipirona', valor: 5}])
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
