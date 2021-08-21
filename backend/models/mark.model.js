const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Mark = sequelize.define('marks',
{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    user_id:{
        type:DataTypes.INTEGER,
        unique:false,
        allowNull:false
    },
    place_id:{
        type:DataTypes.INTEGER,
        unique:false,
        allowNull:false
    },
    mark:{
        type:DataTypes.INTEGER,
        unique:false,
        allowNull:false
    }
})

module.exports = {Mark}