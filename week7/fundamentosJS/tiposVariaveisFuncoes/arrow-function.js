
function present(name) {
    return `meu nome é ${name}`;
}

// Arrow Function
// Não pode ser nomeada (como Function Expression)
// Hoisting: AF se comporta como expressão
const presentArrow = name => `meu nome é ${name}`;
const sum = (num1, num2) => num1 + num2;

// Arrow Function com mais de uma linha de instrução

const sumSmallNumbers = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}


