const cliente = {
    nome:"João", // chave: valor,
    idade:36,
    cpf:"123456567567",
    email:"joao@email.com"
}

const chaves =["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[2]])

chaves.forEach(info=>console.log(cliente[info]))

console.log(cliente["conta"]) //undefined
