function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

//criar novo objeto cliente
const joao = new Cliente("André","120381208","joao@email.com",100)

console.log(joao)
