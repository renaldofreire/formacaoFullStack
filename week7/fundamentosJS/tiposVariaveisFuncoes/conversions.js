// Importância do tipo de dado
// Trabalho em conjunto com booleans

// Conversão Implícita
const number = 456;
const numberString = "456";

//console.log(number + numberString); //contane valores -> 456456

// == compara só valor
// === compara valor e tipo
//console.log(number === numberString); //false
//console.log(number == numberString); //true


// Conversão Explícita
// Number() - transformar string em number
// String() - transformar number em string

//console.log(number + Number(numberString)); //912


// Exercícios
// Convertendo em String
let phone = 1231231234;
console.log("O telefone é " + String(phone)); //phone vira string
console.log("O telefone é " + phone.toString()); //phone vira string


let userOn = String(false); // bollean convertido em string
//console.log(String(userOn));
console.log(typeof userOn);

// Convertendo em Number
let largura = "10";
let altura = "5";
console.log(+ largura * + altura); // usando o simbolo + para converter em number

