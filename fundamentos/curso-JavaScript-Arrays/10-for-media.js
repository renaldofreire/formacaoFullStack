// FOR calculando média

const notas = [10, 6.5, 8, 7.5]

//Declarado fora do loop para evitar que o valor fosse "zerado" a cada novo loop
let somaDeNotas = 0

for (let i = 0; i < notas.length; i++) {
  somaDeNotas += notas[i];
}

let media = somaDeNotas / notas.length

console.log(media)

