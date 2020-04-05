import React from 'react';
import './Header.css';

function Header(props) {
  return (
        <div className="row d-flex justify-content-center">
            <div className="header col-10 col-lg-6 mt-5">
                <div className="row h-100 d-flex align-items-center px-2">
                    <div className="col-8 col-lg-10 d-flex flex-column">
                        <div>ROCK</div> 
                        <div>PAPER</div>
                        <div>SCISSORS</div>
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
