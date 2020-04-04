import React from 'react';
import './BasicRPS.css';
import CircularComponent from '../CircularComponent/CircularComponent';
function BasicRPS(props) {
  return(
      <div className="row d-flex justify-content-center">
          <div className="rpsContainer col-10 col-lg-6 mt-5 d-flex justify-content-center align-items-center flex-column">
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
      </div>
  )
}

export default BasicRPS;