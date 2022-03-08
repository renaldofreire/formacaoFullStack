// forEach
// uma função que chama outra função: callback
// vai ser executada pra cada elemento do array
// pode receber entre 1 e 3 argumentos: o elemento, o indice e o array atual

const notas = [10, 6.5, 8, 7.5]

let somaNotas = 0


notas.forEach(nota => {
    somaNotas += nota
})

let media = somaNotas / notas.length

console.log(media)
