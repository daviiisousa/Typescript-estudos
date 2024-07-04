interface pessoa{
    nome: string,
    idade: number,
    trabalha?: boolean
}

let pessoa1: pessoa ={
    nome: "kaua",
    idade: 18
}

pessoa1.trabalha = true

let pessoa2: pessoa = {
    nome: "davi",
    idade: 18,
    trabalha: false
}

console.log(pessoa1);
console.log(pessoa2);
