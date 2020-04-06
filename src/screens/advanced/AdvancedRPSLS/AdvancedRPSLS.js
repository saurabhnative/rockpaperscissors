import React from 'react';
import './AdvancedRPSLS.css';
import CircularComponent from '../../../components/CircularComponent/CircularComponent';

import Fade from 'react-reveal/Fade';

function AdvancedRPSLS(props) {
    return(
        <div className="row d-flex justify-content-center">
            <Fade bottom>
            <div className="advancedRPSLSContainer col-10 col-lg-4 col-md-6 d-flex justify-content-center mt-3 flex-column">
                <div className="advancedRPSLSTopContainer">
                    <CircularComponent 
                    componentName={'scissor'}
                    source={'advanced'}
                    />
                </div>
                <div className="advancedRPSLSMiddleContainer">
                    <CircularComponent 
                    componentName={'spock'}
                    source={'advanced'}
                    />
                    <CircularComponent 
                    componentName={'paper'}
                    source={'advanced'}
                    />
                </div>
                <div className="advancedRPSLSLowerContainer">
                    <CircularComponent 
                    componentName={'lizard'}
                    source={'advanced'}
                    />
                    <CircularComponent 
                    componentName={'rock'}
                    source={'advanced'}
                    />
                </div>
            </div>
            </Fade>
       </div>     
    );
}

export default AdvancedRPSLS;