import React, {useState, useEffect} from 'react';
import './BasicRPSChoice.css';
import CircularComponent from '../../../components/CircularComponent/CircularComponent';
import { getHouseChoice, getGameResult, calculateGameScore } from '../../../utils/commonUtils';
import { withRouter } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';

function BasicRPSChoice(props) {
    const [houseChoice, updateHouseChoice] = useState('empty');
    const [gameResult, updateGameResult] = useState(null);
    const [userChoice] = useState(props.location.state.userChoice);
    const {userScore,updateUserScore} = props;
    useEffect(() => {
        const timer = setTimeout(() => {
            const randomHouseChoice = getHouseChoice('basic');  
            updateHouseChoice(randomHouseChoice)
          }, 1000);
          return () => clearTimeout(timer);  
        }, [])
    useEffect(() => {
        if(houseChoice !== 'empty') {
            const timer = setTimeout(() => {
                const gameResult = getGameResult(userChoice, houseChoice, 'basic');
                const updatedScore = calculateGameScore(userScore, gameResult);
                updateUserScore(updatedScore);
                updateGameResult(gameResult);
              }, 800);
              return () => clearTimeout(timer);            
        }  
    }, [houseChoice, userChoice])   
    const renderChoiceComponent = (componentName, text) => {
        return(
            <div className="rpsChoiceHalf hv-center flex-column">
                <div className="rpsChoiceHalfUpperSection hv-center">
                <Fade right when={componentName !== 'empty'}>
                    <CircularComponent 
                        componentName={componentName}
                        source={'basic'}
                    />
                </Fade>
                </div>
                <div className="rpsChoiceHalfLowerSection text-center mt-2">
                    {text}
                </div>
            </div>   
        )
    }
    const redirectToBasicHome = () => {
        props.history.push("/basic"); 
    }
    const renderGameResult = () => {
        if(gameResult === null) {
            return(
                <div></div>
            )
        } else {
            return(
                <div className='w-100 hv-center flex-column gameResultText'>
                    <span>
                        {gameResult.text}
                    </span>
                    <button 
                        type="button" 
                        className="btn btn-light playAgainButton"
                        onClick={() => redirectToBasicHome()}
                    >
                        PLAY AGAIN
                    </button>     
                </div>  
            )
        }
    }
    return(
        <div className="row d-flex row d-flex align-items-center flex-column">
          <div className="rpsChoice col-10 col-lg-6 mt-3 hv-center">
            {renderChoiceComponent(userChoice, 'YOU PICKED')}
            {renderChoiceComponent(houseChoice, 'THE HOUSE PICKED')}
          </div>
          <div className="gameResult col-10 col-lg-6 mt-2 hv-center">
            <Flash bottom when={gameResult !== null}>
             {renderGameResult()} 
             </Flash>
          </div>
        </div>
    )
}

export default withRouter(BasicRPSChoice);