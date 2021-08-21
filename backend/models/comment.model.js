const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Comment = sequelize.define('comments',
{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    author_id:{
        type:DataTypes.INTEGER,
        unique:false,
        allowNull:false
    },
    place_id:{
        type:DataTypes.INTEGER,
        unique:false,
        allowNull:false
    },
    text:{
        type:DataTypes.STRING,
        unique:false,
        allowNull:false
    },
    rating:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
})

module.exports = {Comment}