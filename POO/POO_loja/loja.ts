type Produtos = {
    nome: string;
    preco: number
}

interface PessoaInterface {
    nome: string;
    idade: number;
    cor: string
}

class Pessoa implements PessoaInterface {
    readonly cor: string;
    readonly idade: number;
    readonly nome: string;
    readonly hobbie: string;
    constructor(cor: string, idade: number, nome: string, hobbie: string) {
        this.cor = cor
        this.idade = idade
        this.nome = nome
        this.hobbie = hobbie

        
    }
    
}

class Loja {
    readonly endereco: string;
    readonly setor: string;
    private produtos: Produtos[];
    private funcionarios: Pessoa;
    constructor(endereco: string, setor: string, produtos: Produtos[], funcionario: Pessoa) {
        if(produtos.length === 0){
            console.log(' a loja deve ter pelo menos um produto')
        }
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
        this.funcionarios = funcionario
        
    }
    

    listarProdutos(){
        return this.produtos.map(produto => produto.nome)
    }

    getFuncioanarios(){
        return this.funcionarios
    }


    getProdutos(){
        return this.produtos
    }
}

const joao = new Pessoa('Negro', 22, 'joao', 'pintar')
const pedro = new Pessoa('branco', 25, 'Pedro','dancar')

const Loja2Irmao = new Loja('Rua bem ali', 'alimentos', [{nome: 'pao', preco: 1}], joao)
console.log(Loja2Irmao.getFuncioanarios)

console.log(joao)
console.log(Loja2Irmao)
