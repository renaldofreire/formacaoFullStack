const cliente = {
    nome:"João", // chave: valor,
    idade:36,
    cpf:"123456567567",
    email:"email@email.com"
}

// Template String
console.log(`O nome do cliente é ${cliente.nome} e sua idade é ${cliente.idade}.`)
console.log(`Os três primeiros digitos do CPF são: ${cliente.cpf.substring(0,3)}.`)
