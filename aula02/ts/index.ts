
interface Ipessoa{
    nome: string,
    idade: number,
    altura: number,

    dormir: () => void
}

class pessoa implements Ipessoa{
    //atributos(variaveis)
    nome: string;
    idade: number;
    altura: number;

    //metodo constrtutor(passa o valor)
    constructor(nome: string, idade: number, altura: number){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura
    }

    //metodos(funçoes)
    dormir(){
        console.log("zzz");
    }
}

const pessoa1 = new pessoa("davi", 18, 1.76);
const pesoa2 = new pessoa('kaine', 52, 1.64);

console.log(pessoa1);
pessoa1.dormir()
console.log(pesoa2);



