const jwt = require("jsonwebtoken")
const {secretKey} = require("../config/config")

function jwtVerify(req,res,next){
    try{
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(401).json({message:"Пользователь не зарегистрирован!"})
        }
        req.user = jwt.verify(token,secretKey);
        next();
    }catch(e){
        return res.status(401).json({message:"Пользователь не зарегистрирован!"})
    }
}

module.exports = {jwtVerify}