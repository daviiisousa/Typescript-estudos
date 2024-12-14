class Pessoa {
    constructor( readonly nome: string, readonly idade: number){
        this.nome = nome;
        this.idade = idade
    }
}

class Produto {
    constructor(readonly nome: string, readonly preco: number){
        this.nome = nome;
        this.preco = preco
    }
}

class Cliente extends Pessoa {
    constructor(readonly nome: string, readonly idade: number, private produto: Produto[]){
        super(nome, idade)
        this.produto = produto
    }

    dizerBomdia(){
        console.log('bom dia')
    }
}

class TipoDePagemento {
    constructor(public credito: string, public dinheiro: string, public debito: string){
        this.credito = credito;
        this.debito = debito;
        this.dinheiro = dinheiro;
    }
}

class Loja {
    constructor(readonly cliente: Cliente, readonly tipoPagamento: TipoDePagemento){
        this.cliente = cliente;
        this.tipoPagamento = tipoPagamento;
    }
}