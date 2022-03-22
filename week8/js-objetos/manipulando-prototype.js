function cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome,cpf,email,saldo,saldoPoup) {
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const maria = new clientePoupanca("Maria","1238123912","maria@email.com",100,200)

console.log(maria)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

maria.depositarPoup(50)
console.log(maria.saldoPoup)
