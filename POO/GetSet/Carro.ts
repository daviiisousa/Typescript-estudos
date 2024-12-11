class Carro{
    //aqui eu digo q meus atributos sao privados, somente a minha classe tem acesso a ele
    private marca: string;
    private preco: number;
    private cor: string;
    constructor(marca: string, preco: number, cor: string){
        this.marca = marca;
        this.preco = preco;
        this.cor = cor
    }

    ligarCarro(){
        console.log('vrummmm')
    }

    //mas aqui eu posso coletar os nomes
    getMarca(){
        return this.marca
    } 

    //e aqui eu posso alteralo 
    setValor(valor: number){
        this.preco = valor
    }
}

const carro1 = new Carro('chevrolet', 100.500, 'vermelho')
console.log(carro1)
carro1.setValor(5000)
console.log(carro1)
carro1.ligarCarro()