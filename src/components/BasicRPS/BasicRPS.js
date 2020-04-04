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
                />
              </div>
              <div className="rpsUpperRightItem">
                <CircularComponent 
                componentName={'scissor'}
                />
              </div>
            </div>
            <div className="rpsHalfContainer hv-center">
              <CircularComponent 
                componentName={'rock'}
              />
            </div>
          </div>  
      </div>
  )
}

export default BasicRPS;