const cliente = {
    nome:"José",
    idade:45,
    cpf:"123456567567",
    email:"joao@email.com",
    fones:["851201239","8571286213"],
    dependentes: [
        {
            nome: "Juliana Maria",
            parentesco: "filha",
            dataNasc: "22/01/2000"},
        {
            nome: "Joaquina",
            parentesco: "filha",
            dataNasc: "17/07/2006"
        }
    ],
    saldo:100,
    depositar:function(valor) {
        this.valor += valor;
    }
}

let relatorio = "";

//for ... in
for ( let info in cliente ){
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    }
    else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)
