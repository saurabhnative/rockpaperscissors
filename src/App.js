import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import BasicRPS from './screens/basic/BasicRPS/BasicRPS';
import BasicRPSChoice from './screens/basic/BasicRPSChoice/BasicRPSChoice';
import RulesButton from './components/RulesButton/RulesButton';
function App() {
  const [userScore, updateUserScore] = useState(0);
  const [gameType] = useState('basic');
  return (
    <Router>
    <div className="App d-flex flex-column align-items-center">
      <div className="container">
      <Header userScore={userScore}/>
      <Switch>
          <Route path="/basic" exact={true}>
            <BasicRPS />
          </Route>
          <Route path="/basic/choice">
            <BasicRPSChoice 
              userScore={userScore}
              updateUserScore={updateUserScore}
            />
          </Route>
          <Route path="/" exact={true}>
            <BasicRPS />
          </Route>
        </Switch>
        <RulesButton gameType={gameType}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
