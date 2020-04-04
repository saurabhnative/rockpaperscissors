import React from 'react';
import './CircularComponent.css';
import paperIcon from '../../assets/svgs/icon-paper.svg';
import scissorIcon from '../../assets/svgs/icon-scissors.svg';
import rockIcon from '../../assets/svgs/icon-rock.svg';
function CircularComponent(props) {
    function returnImageComponent(component) {
        switch(component) {
            case 'paper':
                return(<img src={paperIcon} className="circleIcon"/>)
            
            case 'scissor':
                return(<img src={scissorIcon} className="circleIcon"/>) 
            
            case 'rock':
                return(<img src={rockIcon} className="circleIcon"/>)    
        }
    }
    return(
       <div className={`outerCircle ${props.componentName} hv-center`}>
           <div className={'innerCircle hv-center'}>
              {returnImageComponent(props.componentName)}
           </div>
       </div>     
    )
}

export default CircularComponent;
