// Parâmetros
// Parâmetros de Função servem para a função receber informações que são necessárias para ela executar corretamente
// Boa prática: usar poucos argumentos para as funções
// Parâmetros vs Argumento


// Ordem de Parâmetros
function nameAge(name, age) {
    return `Meu nome é ${name}, e minha idade é ${age}`;
}

// Deve haver cuidado com a ordem de parâmetros ou argumentos
console.log(nameAge(40, "Renaldo"));

function sumNumber(num1, num2) {
    return num1 + num2;
}

//console.log(sumNumber(12, 123890));
//console.log(sumNumber(-112, 12212));
//console.log(sumNumber(12, 14));

function multiply(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiply(sumNumber(4, 5)));
