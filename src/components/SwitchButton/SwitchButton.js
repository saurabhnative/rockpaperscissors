import React from 'react';
import './SwitchButton.css';
import { withRouter } from "react-router-dom";

function SwitchButton(props) {
    const switchText = props.gameType === 'basic' ? 'advanced' : 'basic';
    const switchIconClass = props.gameType === 'basic' ? 'fa-caret-square-o-up' : 'fa-caret-square-o-down';
    const changeGameMode = () => {
        props.switchGameMode(switchText);
        props.updateUserScore(0, 'switch');
        props.history.push(`/${switchText}`);
    }
    return(
        <div className="col-4  d-flex justify-content-center">
            <button type="button" className="btn lowerButton" onClick={() => changeGameMode()}>
             <div className="hv-center">
                <i className={`fa ${switchIconClass} mr-1`} aria-hidden="true"></i>
                <span>{switchText}</span>
             </div> 
            </button>
        </div>
    )
}

export default withRouter(SwitchButton);