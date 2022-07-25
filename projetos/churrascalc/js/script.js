// Sempre definir bem o que o programa irá fazer
// Regra de negócio
// Carne - 400g por pessoa + de 6h - 650
// Cerveja - 1200ml por pessoa + 6h - 2000ml
// Refrigerante/Água - 1000ml por pessoa + 6h 1500ml
// Crianças valem por 0,5

//pegar elementos/valores
let inputAdult = document.getElementById("adult");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

// //uso do value indica que estou pegando o valor do elemento
// console.log(inputAdult.value, inputKids.value, inputDuration.value);

let result = document.getElementById("result");


//ao clicar no botão, executar função

function calcChurras() {
  console.log("calculando...")

  let adults = inputAdult.value;
  let kids = inputKids.value;
  let duration = inputDuration.value;

  let totalMeat = meatPP(duration) * adults + (meatPP(duration) / 2 * kids);
  let totalBeer = beerPP(duration) * adults;
  let totalSoda = sodaPP(duration) * adults + (sodaPP(duration) / 2 * kids);



  //Uso de atribuição += para inserir novo elemento
  result.innerHTML = `<p>${totalMeat / 1000}kg de Carne.</p>`
  //Math.ceil - para arredondar valor para cima
  result.innerHTML += `<p>${Math.ceil(totalBeer / 355)} latas de Cerveja.</p>`
  result.innerHTML += `<p>${Math.ceil(totalSoda / 2000)} garrafas de Refrigerante 2L.</p>`
}


function meatPP(duration) {
  if (duration >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function beerPP(duration) {
  if (duration >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function sodaPP(duration) {
  if (duration >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
