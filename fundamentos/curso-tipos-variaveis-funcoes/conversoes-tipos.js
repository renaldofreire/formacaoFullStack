// TIPOS DE DADOS
// Trabalhando com BOOLEANOS

// Conversão IMPLICITA
// == compara o valor
// === compara valor e tipo
const number = 456
const numberString = '456'

console.log(number == numberString)
console.log(number + numberString) // 456456: ele concatena e não soma

// Conversão EXPLICITA

// Convertido string em number
// Se houver algum caractere, retornará NaN
console.log(number + Number(numberString))

let number2 = 20
let numberSrt = '20'

console.log(String(number2) + numberSrt) // 2020
