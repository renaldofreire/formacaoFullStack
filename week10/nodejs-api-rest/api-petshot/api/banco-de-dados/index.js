const Sequelize = require('sequelize')

const instancia = new Sequelize(
    'petshot',
    'root',
    '123456',
    {
        host: '127.0.0.1'
        dialect: 'mysql'
    }

)

module.exports = instancia
