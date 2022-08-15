// forEach - Cálculando média
// PARA CADA item do array, execute uma ação
// forma mais funcional/elegante do FOR

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//Método forEach "para cada"
// Funções CALLBACK: parâmetro não é um dado, é outra função
notas.forEach(nota => {
  somaDasNotas += nota
})

let media = somaDasNotas / notas.length

console.log(media)

// forEach() - Exercícios Extras
// executa uma função para cada elemento de um array

function logArrayElements(element, index, array) { //arumento array n será chamado
  console.log("a[" + index + "] = " + element);
}

//log elementos do array
["Uva", 5, 9, "Pikachu", "Vermelho"].forEach(logArrayElements);


// Função para Cópia de Objeto
function copy(o) {
  var copy = Object.create(Object.getPrototypeOf(o));
  var propNames = Object.getOwnPropertyNames(o);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(o, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

var o1 = { a: 1, b: 2 };
var o2 = copy(o1);
var o3 = ["Teste", 12123, 1123123];
var o4 = copy(o3);

// console.log(o3)

// forEach - 
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

socialNetworks.forEach((socialNetwork, index, array) => {
  console.log(index, socialNetwork, array)
  // console.log(socialNetwork, array, index) // não importa a ordem
})

const pokemonsName = ['Pikachu', 'Togepi', 'Charmander', 'Buterfly']

// Declaração desaclopada
// Mais organizado/legível
// Permite reutilização da função
const logPokeName = (pokemons, index, array) => {
  console.log(index, pokemons, array)
}

pokemonsName.forEach(logPokeName)


