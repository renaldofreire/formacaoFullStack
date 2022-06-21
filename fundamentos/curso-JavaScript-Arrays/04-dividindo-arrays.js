// Dividindo Arrays
// slice()

const pokemons = ['Pikachu', 'Bubassauro', 'Pichu', 'Charmander', 'Hyeplume', 'Wardine', 'Shelster', 'Gromite', 'Dinopix', 'Specoth', 'Donkuzz', 'Chimpanzord']

console.log(pokemons.length)

//length representa um número
//resultado será um número
const pokes1 = pokemons.slice(0, pokemons.length / 2)

// const pokes2 = pokemons.slice(pokemons.length / 2, pokemons.length - 1)
// quando não coloca nada no segundo argumento, vai até o final do array
const pokes2 = pokemons.slice(pokemons.length / 2)

console.log(`Pokemons parte 1: ${pokes1}`)
console.log(`Pokemons parte 2: ${pokes2}`)


