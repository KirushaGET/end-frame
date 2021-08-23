import Map from './Components/Map';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import UserPage from './Components/UserPage';
import PlacePage from './Components/PlacePage';

function App() {
  const checkUserRoute = () => {
    // return !localStorage.getItem("user");
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/registration">
          <Registration/>
        </Route>
        <Route path="/user/:id">
          <UserPage/>
        </Route>
        <Route path="/place/:id">
          <PlacePage/>
        </Route>
        <Route
          path="/map"
          // render={() => checkUserRoute() ? <Redirect to="/map"/> : <Map/>}
        >
        <Map />
        </Route>
        {/* {!localStorage.getItem("user") && <Redirect to="/login"/>} */}
      </Switch>
    </div>
  );
}

export default App;
