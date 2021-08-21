const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const User = sequelize.define('users',
{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    login:{
        type:DataTypes.STRING(50),
        unique:true,
        allowNull:false
    },
    mail:{
        type:DataTypes.STRING(50),
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fio:{
        type:DataTypes.STRING(100),
        unique:false,
        allowNull:false
    },
    role:{
        type: DataTypes.INTEGER,
        defaultValue:0
    }
})

module.exports = {User}