const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const CommentMark = sequelize.define('comment-marks',
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
    comment_id:{
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

module.exports = {CommentMark}