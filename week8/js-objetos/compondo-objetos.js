const cliente = {
    nome:"João", // string
    idade:36, // number
    cpf:"123456567567",
    email:"joao@email.com",
    fones:["851201239","8571286213", "8519312987"] //array
}

//object
cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"25/02/2021"
}

console.log(cliente)


//acesso a propiedade nome, dentro do objeto dependentes que está dentro do objeto cliente
cliente.dependentes.nome = "Sara Silva"


console.log(cliente)
