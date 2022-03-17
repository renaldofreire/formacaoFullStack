const clientes = [
    {
        nome: "Joaquim",
        cpf: "1203912903",
        dependentes: [{
            nome: "Joana",
            parentesco: "filha",
            dataNasc: "22/01/2000"
        },
        {
            nome: "Joelma",
            parentesco: "filha",
            dataNasc: "01/12/2001"
        }],
    },
    {
        nome: "Moreira",
        cpf: "12893812738",
        dataNasc: "06/07/1980",
        dependentes: [{
            nome: "Maria",
            parentesco: "filha",
            dataNasc: "04/12/1998"
        }]
    }
]

// Spread operator ou Sintaxe de espalhamento
// ... espalhar o conteúdo dentro da nova array criada
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

//console.log(listaDependentes)
console.table(listaDependentes)

