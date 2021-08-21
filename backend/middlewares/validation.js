const {validatorService} = require("../services/validation.service")

class Validation{
    static registrationValidator(req,res,next){
        const {login,password,mail} = req.body;
        if(!validatorService.isLogin(login)){
            return res.status(401).json({message:"Login is incorrect"});
        }
        if(!validatorService.isMail(mail)){
            return res.status(401).json({message:"Mail is incorrect"});
        }
        if(!validatorService.isPassword(password)){
            return res.status(401).json({message:"Password is incorrect"});
        }
        next();
    }

    static loginValidator(req,res,next){
        const {login,password} = req.body;

        if(!validatorService.isLogin(login)){
            return res.status(401).json({message:"Login is incorrect"});
        }
        if(!validatorService.isPassword(password)){
            return res.status(401).json({message:"Password is incorrect"});
        }
        next();
    }
}

module.exports = {Validation}