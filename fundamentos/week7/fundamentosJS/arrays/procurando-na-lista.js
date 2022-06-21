
const alunos = [ 'João', 'Juliana', 'Caio', 'Ana', 'Faustao' ]

const mediaDosAlunos = [ 10, 7, 9, 6, 9.5 ]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

//lembrar: funções precisam de parâmetros
//arrow function abaixo
//includes -> retorna booleano
//indexOf -> retorna número referente ao indice, no exemplo é 3
const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
                                //[0] [3]
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return 'Aluno não está cadastrado.'
    }
}

console.log(exibeNomeNota("Faustao"))
