const notas = [10, 7, 8, 5, 10]
notas.pop() //remove último elemento. Método POP não aceita nenhum parâmetro
//console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
//console.log(`A média é ${media}.`);


// Exercício
const arrayVazia = [];
const arrayVazia2 = [,,,];
arrayVazia.push(50)
console.log(arrayVazia) //cria array vazio []
console.log(arrayVazia.length) // 0
console.log(arrayVazia[0]) // undefined
console.log(arrayVazia2.length) // 0
console.log(arrayVazia2[0]) // undefined
console.log(arrayVazia2[1]) // undefined
console.log(arrayVazia2[2]) // undefined
