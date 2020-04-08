import React from 'react';
import './BasicRPS.css';
import CircularComponent from '../../../components/CircularComponent/CircularComponent';
import Fade from 'react-reveal/Fade';
function BasicRPS(props) {
  return(
      <div className="row d-flex justify-content-center">
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