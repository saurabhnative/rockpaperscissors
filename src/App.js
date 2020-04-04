import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import BasicRPS from './components/BasicRPS/BasicRPS';
import BasicRPSChoice from './screens/BasicRPSChoice/BasicRPSChoice';
function App() {
  return (
    <Router>
    <div className="App d-flex flex-column align-items-center">
      <div className="container">
      <Header />
      <Switch>
          <Route path="/basic" exact={true}>
            <BasicRPS />
          </Route>
          <Route path="/basic/choice">
            <BasicRPSChoice />
          </Route>
          <Route path="/" exact={true}>
            <BasicRPS />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
