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
import ResetButton from './components/ResetButton/ResetButton';
import Fade from 'react-reveal/Fade';
import JoyrideSteps from './utils/joyrideSteps';
import JoyrideComponent from './components/JoyrideComponent/JoyrideComponent';
import WelcomePopUp from './components/WelcomePopUp/WelcomePopUp';
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
  const steps = [JoyrideSteps[2]];
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
    <div className="App d-flex flex-column align-items-center" id="mainElementContainer">
      <JoyrideComponent
        steps={steps}
        localStorageItem = {'hasSeenAdvancedIntro'}
        runCondition= {gameType === 'advanced'}
      />
      <WelcomePopUp />
      <div className="container" id="rpsElementsContainer">
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
          <div className="row d-flex justify-content-center" id={'rulesButtonsContainer'}>
            <div className="col-12 col-lg-6 mt-4 d-flex flex-row buttonsContainer">
            <RulesButton gameType={gameType} />
            <SwitchButton 
              gameType={gameType} 
              switchGameMode={switchGameMode} 
              updateUserScore={updateUserScore}
            />
            <ResetButton updateUserScore={updateUserScore}/>
            </div>
          </div>
        </Fade>
      </div>
    </div>
    </Router>
  );
}

export default App;
