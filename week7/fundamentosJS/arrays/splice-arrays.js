const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

//listaDeChamada.splice(1,2,'Rodrigo')
listaDeChamada.splice(2,0,'Rodrigo')

//console.log(`Lista de chamada atualizada: ${listaDeChamada}.`)


//Exercício
const animaisDoAquario = [ 'Baleia', 'Polvo', 'Golfinho', 'Tubarao' ]

animaisDoAquario.splice(1,0,'Peixe Amarelo')
animaisDoAquario.splice(3,2,'Peixe Azul') //remove dois elementos a partir da pos 3

//peixe amarelo vai para indice 1
//peixe azul vai para indice 3

console.log(animaisDoAquario)
