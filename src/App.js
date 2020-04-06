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
  const getInitialScore = () => {
    let initialScore = 0;
    if(localStorage.getItem('basicGameScore')) {
      initialScore = parseInt(localStorage.getItem('basicGameScore'), 10)
    }
    return initialScore;
  }
  const [userScore, handleUserScore] = useState(() => {
    const initialScore = getInitialScore();
    return initialScore;
  });
  const [gameType, switchGameMode] = useState('basic');
  const updateUserScore = (score, event) => {
    if(event === 'update') {
      handleUserScore(score);
      if(gameType === 'basic') {
        localStorage.setItem("basicGameScore", score);
      } else {
        localStorage.setItem("advancedGameScore", score);
      }
    } else {
      let existingScore = 0;
      const existingGameType = gameType;
      console.log(gameType);
      
      if(existingGameType === 'advanced' && localStorage.getItem("basicGameScore")) {
        existingScore = parseInt(localStorage.getItem("basicGameScore"),10);
      } else if(localStorage.getItem("advancedGameScore")){
        existingScore = parseInt(localStorage.getItem("advancedGameScore"),10);
      }
      handleUserScore(existingScore);
    }
  }
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
            <SwitchButton 
              gameType={gameType} 
              switchGameMode={switchGameMode} 
              updateUserScore={updateUserScore}
            />
          </div>
        </Fade>
      </div>
    </div>
    </Router>
  );
}

export default App;
