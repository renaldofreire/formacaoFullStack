// Laço de repetição com FOR
// Cuidado com Loop Infinito
// Especificar condição de parada

const numeros = [100, 200, 300, 400, 500, 600]

//i++ -> somar +1 toda vez que passar por ele
for (let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i])
}


//testes
const ateDez = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
for (let i = 0; i <= 10; i++) {
    console.log(i, ateDez[i])
}
