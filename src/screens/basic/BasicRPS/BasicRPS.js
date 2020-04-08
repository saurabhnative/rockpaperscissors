import React from 'react';
import './BasicRPS.css';
import CircularComponent from '../../../components/CircularComponent/CircularComponent';
import Fade from 'react-reveal/Fade';
import JoyrideSteps from '../../../utils/joyrideSteps';
import JoyrideComponent from '../../../components/JoyrideComponent/JoyrideComponent';
function BasicRPS(props) {
  const steps = [JoyrideSteps[0]];
  return(
      <div className="row d-flex justify-content-center">
        <JoyrideComponent 
          steps={steps}
          localStorageItem = {'hasSeenBasicIntro'}
          runCondition= {true}
        />
        <Fade bottom>
          <div className="rpsContainer col-10 col-lg-6 mt-3 d-flex justify-content-center align-items-center flex-column">
            <div className="rpsHalfContainer d-flex">
              <div className="rpsUpperLeftItem">
                <CircularComponent 
                componentName={'paper'}
                source={'basic'}
                />
              </div>
              <div className="rpsUpperRightItem">
                <CircularComponent 
                componentName={'scissor'}
                source={'basic'}
                />
              </div>
            </div>
            <div className="rpsHalfContainer hv-center">
              <CircularComponent 
                componentName={'rock'}
                source={'basic'}
              />
            </div>
          </div>  
         </Fade> 
      </div>
  )
}

export default BasicRPS;