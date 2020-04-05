import React from 'react';
import './CircularComponent.css';
import paperIcon from '../../assets/svgs/icon-paper.svg';
import scissorIcon from '../../assets/svgs/icon-scissors.svg';
import rockIcon from '../../assets/svgs/icon-rock.svg';
import { withRouter } from "react-router-dom";

function CircularComponent(props) {
    const returnImageComponent = (component) => {
        switch(component) {
            case 'paper':
                return(<img src={paperIcon} className="circleIcon" alt={'paper'}/>)
            
            case 'scissor':
                return(<img src={scissorIcon} className="circleIcon" alt={'scissor'}/>) 
            
            case 'rock':
                return(<img src={rockIcon} className="circleIcon" alt={'rock'}/>)  
                
            default:
                return null;    
        }
    }

    const redirectToChoice = () => {
        if(props.source === 'basic') {
           props.history.push({
            pathname: "/basic/choice",
            state: { userChoice: props.componentName }
           });  
        }
    }
    const outerCircleClass = `outerCircle ${props.componentName} hv-center`;
    let innerCircleClass = `innerCircle hv-center`;
    if(props.componentName === 'empty') {
        innerCircleClass += ` empty`;
    }
    return(
       <div 
        className={outerCircleClass}
        onClick={() => redirectToChoice()}
       >
           <div className={innerCircleClass}>
              {returnImageComponent(props.componentName)}
           </div>
       </div>     
    )
}

export default withRouter(CircularComponent);
