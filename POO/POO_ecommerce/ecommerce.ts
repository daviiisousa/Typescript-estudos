class Pessoa {
    constructor(public readonly nome: string, public readonly idade: number){
        this.nome = nome;
        this.idade = idade
    }
}

class Produto {
    constructor(public readonly nome: string, public readonly preco: number){
        this.nome = nome;
        this.preco = preco
    }
}

class Cliente extends Pessoa {
    private produtoDocliente: Produto[] = [] 
    constructor(readonly nome: string, readonly idade: number){
        super(nome, idade)

    }

    dizerBomdia(): void{
        console.log(`Ola bom dia, me chamo ${this.nome}`)
    }

    adcionarProduto(produto: Produto[]): void{
        this.produtoDocliente.push(...produto)
    }
    
    listarProdutosDoCliente(): Produto[] {
        return this.produtoDocliente
    }
}

class Loja {
    private clentesDaLoja: Cliente[] = []
    private produtosDaLoja: Produto[] = []
    constructor(public nome: string, public endereco:string){
        this.nome = nome;
        this.endereco = endereco;

    }

    novoCliente(cliente: Cliente[]): void{
        this.clentesDaLoja.push(...cliente)
    }

    novoProduto(produto: Produto[]): void{
        this.produtosDaLoja.push(...produto)
    }

    listarProdutos(): string[]{
        return this.produtosDaLoja.map(p => p.nome)
    }

}


const joao = new Cliente('Joso', 32)
joao.adcionarProduto([{nome: 'pao', preco: 14}, {nome: 'cerveja', preco: 21}])
const produtosDoJoao = joao.listarProdutosDoCliente()
console.log(joao)
console.log(produtosDoJoao)

const bemAqui = new Loja('mercado bem aqui', 'rua da lama')
const noovoCliente = bemAqui.novoCliente([joao])
const novoProduto = bemAqui.novoProduto(produtosDoJoao)
console.log(bemAqui)
