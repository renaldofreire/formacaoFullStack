// BOOLEAN
// VERDADEIRO OU FALSO
const usuarioLogado = true
const contapaga = false

// TRUTHY ou FALSY
// 0 => false
// 1 => true

// console.log(0 == false) // true
// console.log('' == false) // true
// console.log(1 == true) // true

let myVar // espaço na memória está guardado, mas nada foi atribuido
let varNull = null

console.log(myVar) // undefined
console.log(varNull) // null

let myNum = 3 // number
let myText = 'Pikachu' // string

console.log(typeof myVar) // undefined

// null = object
// Null deveria ter sido criado como Null, porém, quando o JS foi criado, ele era object
// Este é uma das características "bugs" do JS
console.log(typeof varNull) // object
