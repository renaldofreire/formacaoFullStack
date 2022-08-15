// Objetos e Métodos

// Calcular média

function calcMedia() {
  return ((this.notas[0] + this.notas[1]) / 2 )
}

let aluno1 = {
  nome: 'Joao',
  notas: [5, 7, 2],
  media: calcMedia
}

let aluno2 = {
  nome: 'Maria',
  notas: [9, 10, 8],
  media: calcMedia
} 

console.log(`O aluno ${aluno1["nome"]} tirou a nota ${aluno1.media()}`)
console.log(`O aluno ${aluno2["nome"]} tirou a nota ${aluno2.media()}`)
