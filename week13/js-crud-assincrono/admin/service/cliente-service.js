const criarNovaLinha = (nome, email) => {

    const linhaNovoCliente = document.createElement('tr')

    const conteudo = `
    <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
        `
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente //pois se trata de uma função
}

const tabela = document.querySelector('[data-tabela]')


const  http = new XMLHttpRequest()

//metodo
http.open('GET', 'http://localhost:3000/profile')

http.send()


http.onload = () => {
    const data = JSON.parse(http.response)
    console.log(data)
    data.forEach(elemento => {
        tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email))
    })

    const http2 = new XMLHttpRequest()
    http2.open('GET', 'http://localhost:3000/profile/semanaPassada')

    http2.onload = () => {
        ..
    }
    http2.send()


}

