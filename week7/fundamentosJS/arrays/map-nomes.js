let nomes = ["ana julia","Caio vinicius","BIA silva"]

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

//console.log(nomesAtualizados)

//testes

const name = "Alura"
let nomeMaisculo = "";

for (let i = 0; i < name.length; i++) {
    nomeMaisculo += name[i].toUpperCase()
}

console.log(nomeMaisculo)
