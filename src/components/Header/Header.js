import React from 'react';
import './Header.css';

function Header(props) {
  const renderGameOptions = () =>{
    let gameOptions = ['ROCK', 'PAPER', 'SCISSORS'];  
    let optionsClass = 'basicOptions';
    if(props.gameType === 'advanced') {
        gameOptions = gameOptions.concat('LIZARD', 'SPOCK');
        optionsClass = 'advancedOptions';
    }
    return(
        <div className={optionsClass}>
            {gameOptions.map((item, index)=>{
                return(
                    <div key={index}>
                        {item}
                    </div>
                )
            })}
        </div>   
    );
  }  
  return (
        <div className="row d-flex justify-content-center">
            <div className="header col-10 col-lg-6 mt-5">
                <div className="row h-100 d-flex align-items-center px-2">
                    <div className="col-8 col-lg-10 d-flex flex-column">
                        {renderGameOptions()}
                    </div>
                    <div className="col-4 col-lg-2 score-container">
                       <div className="score-text">
                           SCORE
                       </div>
                       <div className="score-value">
                           {props.userScore}
                       </div>     
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Header;
