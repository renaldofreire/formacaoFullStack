// Alterando Arrays
// splice()

const chamadaPokemons = ['Pikachu', 'Bubassauro', 'Pichu', 'Charmander', 'Scorpung']

// pode-se usar sem o terceiro parâmetro
chamadaPokemons.splice(2, 2, 'Buterfly', 'Charmilion')
console.log(`Nova atualização na lista de pokemons: ${chamadaPokemons}`)

//Usando splice para adicionar ao final
chamadaPokemons.splice(chamadaPokemons.length, 0, 'AAAAAA', 'BBBBB')
console.log(chamadaPokemons)


