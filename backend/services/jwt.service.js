const jwt = require("jsonwebtoken")
const {secretKey} = require("../config/config")

const createToken = (login,mail,id)=>{
    return jwt.sign({
        login,
        mail,
        id
    },secretKey,{expiresIn:'48h'});
}

module.exports = {createToken}