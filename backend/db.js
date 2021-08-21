const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'nov.legend',//Имя БД
    'postgres',//username
    'root',
    {
        dialect: 'postgres',
        host: 'localhost',
        port:5432
    }
)