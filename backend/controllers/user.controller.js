const {User} = require("../models/user.model")
const {createToken} = require("../services/jwt.service")
const { Op, where } = require('sequelize')
const bcrypt = require("bcrypt")

class userController{
    static async registration(req,res){
        const {login,password,mail,firstname,lastname,fathername} = req.body;

        if(await User.findOne({where:{login:login}})){
            return res.status(400).json({message:"Login was used!"})
        }
        if(await User.findOne({where:{mail:mail}})){
            return res.status(400).json({message:"Mail was used!"})
        }
        try{
            const user = await User.create({
                login:login,
                password:bcrypt.hashSync(password,1),
                mail:mail,
                fio:`${lastname} ${firstname} ${fathername}`
            });
            const token = createToken(login,mail,user.id);
            return res.status(200).json({token:`Bearer ${token}`,message:"OK"})
        }catch(e){
            return res.status(400).json({message:"You should fill in all fields!"})
        }
    }

    static async login(req,res){
        const {login,password} = req.body;

        const userCondidate = await User.findOne({where:{login:login}});
        if(!userCondidate){
            return res.status(404).json({message:"User was not found!"});
        }
        if(bcrypt.compareSync(password,userCondidate.password)){
            const token = createToken(login,userCondidate.mail,userCondidate.id);
            return res.status(200).json({token:`Bearer ${token}`,message:"OK"})
        }else{
            return res.status(401).json({message:"Password is wrong!"})
        }
    }
}

module.exports = {userController}