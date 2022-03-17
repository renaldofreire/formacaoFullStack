const cliente = {
    nome:"José",
    idade:45,
    cpf:"123456567567",
    email:"joao@email.com",
    fones:["851201239","8571286213"],
    dependentes: [{
        nome: "Juliana Maria",
        parentesco: "filha",
        dataNasc: "22/01/2000"
    }]
    //tranforma chave dependentes em um array
}

//usar push para adicionar
cliente.dependentes.push({
    nome: "Joaquina",
    parentesco: "filha",
    dataNasc: "17/07/2006"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="17/07/2006")


console.log(filhaMaisNova[0].nome) //pegando indice zero do array da propiedade nome
