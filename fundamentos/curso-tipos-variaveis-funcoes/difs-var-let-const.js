// VAR - pode ser usado em qualquer parte do código
// Grandes possibilidades de bugs
// var altura = 5
// var comprimento = 7;
//
// area = altura * comprimento
// console.log(area)
//
// var area;

// LET - declara variável no escopo do bloco atual, opcionalmente iniciando-a com um valor
// let forma = 'retangulo'
// let altura = 5
// let comprimento = 7
// let area = 15 // inicializada
//
// if (forma === 'retangulo') {
//   area = altura * comprimento
// } else {
//   area = (altura * comprimento) / 2
// }
//
// console.log(area)

// Outro exemplo
// let pokemon = 'pikau'
//
// if (pokemon === 'pikachu') {
//   pokemon = 14;
//   console.log(pokemon)
// } else {
//   pokemon = 'Não é pikachu'
//   console.log(pokemon)
// }

// CONST - constante, uma vez declarada não pode mais ser alterada, ela precisa iniciar com algum valor
// Constantes possuem escopo de bloco, semelhantes às variáveis declaradas usando o palavra-chave let. O valor de uma constante não pode ser alterado por uma atribuição, e ela não pod ser redeclarada.

const forma = 'triangulo'
const altura = 5
const comprimento = 7
let area;

if (forma === 'quadrado') {
  area = altura * comprimento;
} else {
  area = (altura * comprimento / 2)
}

console.log(area)

// const pokemon = 'pikhu'
//
// if (pokemon === 'pikachu') {
//   pokemon = 20;
//   console.log(pokemon)
// } else {
//   pokemon = 'Não é o pikachu'
//   console.log(pokemon)
// }
// Aqui, o código não irá funcionar


