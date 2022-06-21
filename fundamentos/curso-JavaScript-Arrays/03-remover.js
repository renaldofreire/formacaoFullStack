// Removendo Elementos
// pop() - remove último elemento

const notas = [7.5, 7, 8, 3, 7]

notas.pop() //Não aceita nenhum parâmetro
console.log(notas); //remove ulti elemento

// Quando variável nao inicia com nada, será declarado como VAR
//Não é uma boa prática
media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

//template string ${nome-variável}
console.log(`A média é ${media}`)
