const cliente = {
    nome:"João", // chave: valor,
    idade:36,
    cpf:"123456567567",
    email:"joao@email.com"
}

console.log(cliente)
cliente.fone ="981237910" // adiciona

console.log(cliente)
//cliente é o objeto, fone é a chave
cliente.fone ="871261912" // substitui, sobrepõe

console.log(cliente)



//Extra: testes
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
 aliado: {
   nome: "Saruman",
   classe: "mago"
 },
 status: "desaparecido"
}

// Deletando propriedade
// remove o valor da propriedade e chave
// é booleano: retorna true ou false
// nao retorna false ao remover propriedade inexistente
delete objPersonagem.aliado
delete objPersonagem["status"]
console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

