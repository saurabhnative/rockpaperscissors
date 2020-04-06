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

import AdvancedRPSLS from './screens/advanced/AdvancedRPSLS/AdvancedRPSLS';
import RulesButton from './components/RulesButton/RulesButton';
import SwitchButton from './components/SwitchButton/SwitchButton';
import Fade from 'react-reveal/Fade';
function App() {
  const [userScore, updateUserScore] = useState(0);
  const [gameType, switchGameMode] = useState('advanced');
  return (
    <Router>
    <div className="App d-flex flex-column align-items-center">
      <div className="container">
      <Fade top>
        <Header userScore={userScore} gameType={gameType}/>
      </Fade>
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
          <Route path="/advanced" exact={true}>
            <AdvancedRPSLS />
          </Route>
          <Route path="/" exact={true}>
            <BasicRPS />
          </Route>
        </Switch>
        <Fade bottom>
          <div className="row d-flex justify-content-center mt-4">
            <RulesButton gameType={gameType} />
            <SwitchButton gameType={gameType} switchGameMode={switchGameMode}/>
          </div>
        </Fade>
      </div>
    </div>
    </Router>
  );
}

export default App;
