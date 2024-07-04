type Criterio = "grande" | "pequeno";

function escolhaUmNumeroAleatorio(num1: number, num2: number, criterio?: Criterio): number{
    switch(criterio){
        case "grande":
            return num1 > num2 ? num1 : num2;
        case "pequeno":
            return num1 < num2 ? num1 : num2;
        default:
            const numeroAleatorio = Math.random()

            if(numeroAleatorio >= 0.5) return num1;
            return num2
    }
}

const numeroEscolhido = escolhaUmNumeroAleatorio(10, 20,);

console.log("o numero escolhido: ", numeroEscolhido);
