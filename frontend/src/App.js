import Map from './Components/Map';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Registration from './Components/Rerestration/Registration';

function App() {
  // const checkUserRoute = () => {
  //   return !localStorage.getItem("user");
  // };

  document.body.style.backgroundColor = "rgb(151, 194, 234)";
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/registration">
          <Registration/>
        </Route>
        <Route
          path="/map"
          // render={() => checkUserRoute() ? <Redirect to="/map"/> : <Map/>}
          render={() =>  <Map/>}
        />
        <Redirect to="/login"/>
        {/*{!localStorage.getItem("user") && <Redirect to="/login"/>}*/}
      </Switch>
    </div>
  );
}

export default App;
