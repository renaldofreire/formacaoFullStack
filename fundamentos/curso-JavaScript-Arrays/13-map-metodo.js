// Método map()
// Não retorna

const notas = [10, 9, 8, 7, 6]

// const notasAtualizadas = notas.map(nota => nota + 1) //erro porque gera nota 11


const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)


// Atulizar nomes para que sejam escritos apenas com letras maiúsculas
let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)


//
const numbers = [4, 9, 16, 25]
const newArr = numbers.map(Math.sqrt);
console.log(newArr)

const newNum = [65, 44, 12, 4];
const otherArr = newNum.map(myFuncion);

function myFuncion(num) {
  return num * 10;
}

console.log(otherArr)
