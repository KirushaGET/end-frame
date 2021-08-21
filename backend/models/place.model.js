const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Place = sequelize.define('places',
{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(100),
        unique:true,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        unique:false,
        allowNull:false
    },
    photo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    rating:{
        type:DataTypes.INTEGER,
        unique:false,
        defaultValue:0
    },
    latitude:{
        type:DataTypes.DECIMAL,
        unique:true,
        allowNull:false
    },
    longitude:{
        type:DataTypes.DECIMAL,
        unique:true,
        allowNull:false
    }
})

module.exports = {Place}