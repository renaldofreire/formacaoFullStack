// Funciona como um if / if else / verdadeiro ou falso
// Operador Tenário

const minAge = 18;
const clientAge = 30;


//Modo comum
//if (clientAge >= minAge) {
    //console.log("Você pode realizar a compra.")
//} else {
    //console.log("Você não pode comprar.")
//}


// Operador Tenário
// É necessário tomar cuidado, pois ele dificulta a leitura do código
//
//               //condição       //true     //false
console.log(clientAge >= minAge ? "Pode!" : "Não pode.");
