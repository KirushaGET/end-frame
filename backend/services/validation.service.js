class validatorService{
    
    static isLogin(_login){
        let login = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
        return login.test(_login);
    }

    static isMail(_mail){
        let mail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
        return mail.test(_mail);
    }

    static isPassword(_password){
        if(_password.length > 8) return true;
        else return false;
    }

    static isName(_name){
        if(_name.split(" ").length == 1)
            return true;
        else
            return false;
    }
}

module.exports = {validatorService}