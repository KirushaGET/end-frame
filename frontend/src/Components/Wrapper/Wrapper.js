import { Route, Switch } from "react-router-dom";
import SignIn from "../Login/SignIn/SignIn";
import SignUp from "../Rerestration/SignUp/SignUp";
import "./WrapperStyles.scss";

const Login = () => {
  document.body.style.backgroundColor = "#e3ebf8";

  return (
    <div className="wrapper">
      <header className="header">
        <p>Добро пожаловать в Новгородскую область!</p>
      </header>
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
