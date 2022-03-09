const cliente = {
    nome:"João", // chave: valor,
    idade:36,
    cpf:"123456567567",
    email:"joao@email.com",
    fones:["851201239","8571286213", "8519312987"] //arrey dentro do objeto
}

cliente.fones.forEach(fone => console.log(fone))
