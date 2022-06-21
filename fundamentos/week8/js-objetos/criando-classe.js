//class sempre inicia com letra maiúscula
class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const joao = new Cliente("Joao", "19830123809", "joao@mail.com", 85)

joao.exibirSaldo()
//console.log(joao)
