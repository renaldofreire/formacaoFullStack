const customExpress = require('./config/customExpress')
const conexao = require('./infrastructure/connection')
const Tabelas = require('./infrastructure/tabelas')

conexao.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('Conecado com sucesso.')
    }

    Tabelas.init(conexao)
    const app = customExpress()

    app.listen(7000, () => console.log('Teste de server na porta 7000'))
})



