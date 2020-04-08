import React, {useState, useEffect} from 'react';
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride';

function JoyrideComponent(props) {
    const [stepIndex, handleStepIndexUpdate] = useState(0);
    const [shouldShowBasicIntro, updateBasicIntroVisibility] = useState(false);
  
    useEffect(() => {
        if(!localStorage.getItem(props.localStorageItem)) {
            if(props.runCondition) {
                updateBasicIntroVisibility(true);
            }
        } 
      }, [props.localStorageItem, props.runCondition])
    const handleJoyrideCallback = (data) => {
        const { action, index, status, type } = data;
        console.log(shouldShowBasicIntro, stepIndex, action, index, status, type);
        
        if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
          // Update state to advance the tour
          const updatedStepIndex = index + (action === ACTIONS.PREV ? -1 : 1); 
          handleStepIndexUpdate(updatedStepIndex);
        }
        else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
          // Need to set our running state to false, so we can restart if we click start again.
          updateBasicIntroVisibility(false);
          localStorage.setItem(props.localStorageItem, true);
        }
    }
    return(
        <Joyride
          steps={props.steps}
          run={shouldShowBasicIntro}
          callback={handleJoyrideCallback}
          stepIndex={stepIndex}
          locale={{
              'close': 'OK'
          }}
        />
    )
}

export default JoyrideComponent;

