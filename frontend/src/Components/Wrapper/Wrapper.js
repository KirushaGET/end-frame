import { Route, Switch } from "react-router-dom";
import SignIn from "../Login/SignIn/SignIn";
import SignUp from "../Rerestration/SignUp/SignUp";
import logo from "../../images/gerb_novgorodskoj_oblasti_Abali.png"
import "./WrapperStyles.scss";

const Login = () => {
  document.body.style.backgroundColor = "#e1ba7f";

  return (
    <div className="wrapper">
      <header className="header">
        <p>Добро пожаловать в Новгородскую область!</p>
      </header>
      <img src={logo} className="logo_icon"/>
      <div className="inner_wrapper">
        <Switch>
          <Route path="/login">
            <SignIn/>
          </Route>
          <Route path="/registration">
            <SignUp/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Login;
