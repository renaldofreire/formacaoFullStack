// Tipos NULL e UNDEFINED
// null = ausência de valor, variável existe e foi iniciada
// undefined = ausência de valor não inicializado (não atribuído)

let input = null;
let inputX = "c";
let input2 = 10;
let input3
//let input = 100;

if (inputX === null) {
    console.log('Null: ausência de valor');
}
else {
    console.log(inputX);
}

console.log(input); //null
console.log(input2); //10
console.log(input3); //undefined


