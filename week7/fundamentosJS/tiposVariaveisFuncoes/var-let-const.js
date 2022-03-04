// Diferenças entre VAR, LET e CONST

// VAR
//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area); //35
//var area;

// LET
//let forma = 'retângulo';
//let altura = 5;
//let comprimento = 7;
//let area; //variável vazia

//if (forma === 'retângulo') {
//area = altura * comprimento;
//}
//else {
//area = (altura * comprimento) / 2;
//}

//CONST
const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

