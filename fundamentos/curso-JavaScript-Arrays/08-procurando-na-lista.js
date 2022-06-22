// Procurando na lista

const alunos = ['Joao', 'Julia', 'Mario', 'Louise', 'Carol']
const mediasDosAlunos = [10, 6, 7, 10, 6.5]

//Lista de 2 dimensões
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

// Funções precisam de parâmetros
// Arrow function
// método includes busca pelo valor sugerido pelo array que o precede
const exibeNomeNota = (nomeDoAluno) => {
  //busca em alunos, o nome do aluno, includes compara o valor (true or false)
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
    //indexOf: retorna um número
    return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
  } else {
    return 'Aluno não está cadastrado.'
  }
}

// console.log(exibeNomeNota('Carol'))

// REVISAO
const vegetais = ['Tomate', 'Pimentao', 'Cebola', 'Pepino', 'Cenoura']
const valorVegetais = [5, 6, 3, 8, 7]

//lista 2dimensões
let listaVegVal = [vegetais, valorVegetais]

//arrow function
const exibeValor = (nomeVeg) => {
  if (listaVegVal[0].includes(nomeVeg)) {
    let index = listaVegVal[0].indexOf(nomeVeg)
    return 'O quilo do ' + listaVegVal[0][index] + ' custa ' + listaVegVal[1][index] + ' reais.'
  } else {
    return 'Este produto não está cadastrado.'
  }
}

console.log(exibeValor('Pepino'))
console.log(exibeValor("Tomate"))



