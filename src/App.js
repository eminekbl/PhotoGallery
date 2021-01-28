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
      <NavBar links={links} />
      <Switch>
        {routeMaps}
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
