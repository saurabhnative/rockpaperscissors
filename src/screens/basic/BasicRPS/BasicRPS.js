import React from 'react';
import './BasicRPS.css';
import CircularComponent from '../../../components/CircularComponent/CircularComponent';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

function BasicRPS(props) {
  return(
      <div className="row d-flex justify-content-center">
        <Fade bottom>
          <div className="rpsContainer col-10 col-lg-6 mt-3 d-flex justify-content-center align-items-center flex-column">
            <div className="rpsHalfContainer d-flex">
              <div className="rpsUpperLeftItem">
              <Roll bottom delay={500}>
                <CircularComponent 
                componentName={'paper'}
                source={'basic'}
                />
                </Roll>
              </div>
              <div className="rpsUpperRightItem">
              <Roll bottom delay={500}>
                <CircularComponent 
                componentName={'scissor'}
                source={'basic'}
                />
              </Roll>
              </div>
            </div>
            <div className="rpsHalfContainer hv-center">
            <Roll bottom delay={500}>
              <CircularComponent 
                componentName={'rock'}
                source={'basic'}
              />
              </Roll>
            </div>
          </div>  
         </Fade> 
      </div>
  )
}

export default BasicRPS;