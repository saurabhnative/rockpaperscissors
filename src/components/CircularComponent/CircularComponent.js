import React from 'react';
import './CircularComponent.css';
import paperIcon from '../../assets/svgs/icon-paper.svg';
import scissorIcon from '../../assets/svgs/icon-scissors.svg';
import rockIcon from '../../assets/svgs/icon-rock.svg';
import spockIcon from '../../assets/svgs/icon-spock.svg';
import lizardIcon from '../../assets/svgs/icon-lizard.svg';
import { withRouter } from "react-router-dom";
import Roll from 'react-reveal/Roll';

function CircularComponent(props) {
    const returnImageComponent = (component) => {
        switch(component) {
            case 'paper':
                return(<img src={paperIcon} className={`circleIcon ${props.source}`} alt={'paper'}/>)
            
            case 'scissor':
                return(<img src={scissorIcon} className={`circleIcon ${props.source}`} alt={'scissor'}/>) 
            
            case 'rock':
                return(<img src={rockIcon} className={`circleIcon ${props.source}`} alt={'rock'}/>)  
            
            case 'spock':
                return(<img src={spockIcon} className={`circleIcon ${props.source}`} alt={'rock'}/>)  
             
            case 'lizard':
                return(<img src={lizardIcon} className={`circleIcon ${props.source}`} alt={'rock'}/>)  
            
            default:
                return null;    
        }
    }

    const redirectToChoice = () => {
           props.history.push({
            pathname: "/basic/choice",
            state: { userChoice: props.componentName, gameType: props.source }
           });
    }
    const outerCircleClass = `outerCircle ${props.componentName} ${props.source} hv-center`;
    let innerCircleClass = `innerCircle ${props.source} hv-center`;
    if(props.componentName === 'empty') {
        innerCircleClass += ` empty`;
    }
    return(
        <Roll bottom delay={500}>
        <div 
            className={outerCircleClass}
            onClick={() => redirectToChoice()}
        >
            <div className={innerCircleClass}>
                {returnImageComponent(props.componentName)}
            </div>
        </div>    
       </Roll> 
    )
}

export default withRouter(CircularComponent);
