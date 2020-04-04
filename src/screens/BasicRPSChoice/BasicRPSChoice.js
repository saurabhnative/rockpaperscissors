import React, {useState, useEffect} from 'react';
import './BasicRPSChoice.css';
import CircularComponent from '../../components/CircularComponent/CircularComponent';
import { getHouseChoice } from '../../utils/commonUtils';
function BasicRPSChoice(props) {
    const [houseChoice, updateHouseChoice] = useState('empty');
    useEffect(() => {
        const timer = setTimeout(() => {
            const randomHouseChoice = getHouseChoice('basic');  
            updateHouseChoice(randomHouseChoice)
          }, 2000);
          return () => clearTimeout(timer);  
        }, [])
    useEffect(() => {
        if(houseChoice !== 'empty') {
            console.log('house choice changes');
        }  
    }, [houseChoice])   
    const renderChoiceComponent = (componentName, text) => {
        return(
            <div className="rpsChoiceHalf hv-center flex-column">
                <div className="rpsChoiceHalfUpperSection hv-center">
                    <CircularComponent 
                        componentName={componentName}
                        source={'basic'}
                    />
                </div>
                <div className="rpsChoiceHalfLowerSection text-center mt-2">
                    {text}
                </div>
            </div>   
        )
    }
    return(
        <div className="row d-flex justify-content-center">
          <div className="rpsChoice col-10 border col-lg-6 mt-5 hv-center">
            {renderChoiceComponent('paper', 'YOU PICKED')}
            {renderChoiceComponent(houseChoice, 'THE HOUSE PICKED')}
            </div>
        </div>
    )
}

export default BasicRPSChoice;