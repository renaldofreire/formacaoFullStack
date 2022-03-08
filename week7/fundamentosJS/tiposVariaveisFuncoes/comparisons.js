// == comparação implícita
const number = 7;
const text = "7";

//console.log(number == text); //true
console.log(number === text); //false


// typeof
console.log(typeof number);
console.log(typeof text);

// == compara apenas valor
// === compara valor e tipo
// BOAS PRÁTICAS recomendam uso de ===

// Caso necessário, usar conversão explícita:
Number()
String()
