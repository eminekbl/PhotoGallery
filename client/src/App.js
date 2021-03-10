import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,

} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import links from "./data/links";
import NavBar from "./components/NavBar";
import { Context } from "./context/AuthContext"


function App() {


  const routeMaps = links.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));
  return (

    <Router>
      <Context>
        <NavBar links={links} />
        <Switch  >
          {routeMaps}
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Context>
    </Router >

  );
}

export default App;
