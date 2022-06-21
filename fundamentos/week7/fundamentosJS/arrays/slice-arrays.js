const names = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

console.log(names.length)
const sala1 = names.slice(0,names.length/2) 
const sala2 = names.slice(names.length/2)

console.log(`Alunos da Sala 1: ${sala1}`)
console.log(`Alunos da Sala 2: ${sala2}`)
