
const notas = [ 10, 6.5, 8, 7.5 ]


let somaNotas = 0;

// Tudo que for insrido no bloco do for é realizado todas as vezes que passar pelo loop
// Todas vez a variável será iniciada descartando valor antigo

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];//somando o valor de notas dentro de somaNotas
}

let media = somaNotas / notas.length;

console.log(`A média das notas é ${media}`)
