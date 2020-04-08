import React,{useEffect, useState} from 'react';
import './WelcomePopUp.css';
function WelcomePopUp(props) {
    const [modalShow, toggleModal] = useState('');
    const [modalDisplay, toggleDisplay] = useState('none');
    const openModal = () => {
        toggleModal('show');
        toggleDisplay('block');     
    }
    const closeModal = () => {
        toggleModal('');
        toggleDisplay('none'); 
        localStorage.setItem('welcomePopShown', true)
    }
    useEffect(() => {
        if(!localStorage.getItem('welcomePopShown')) {
            openModal();
        }
    }, [])
    return(
        <div className={`modal fade mt-2 ${modalShow}`} 
            id="welcomeModal" 
            tabIndex="-1" 
            role="dialog" 
            aria-labelledby="welcomeModalLabel" 
            aria-hidden="true"
            style={{ display: modalDisplay }}
        >
                <div className="modal-dialog" role="document">
                    <div className="modal-content modalContainer">
                    <div className="modal-header">
                        <h5 className="modal-title" id="welcomeModalHeader">Welcome</h5>
                        <button type="button" className="close" aria-label="Close" onClick={() => closeModal()}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body d-flex justify-content-center welcomePopUpBody flex-column">
                        <span className={'mb-2'}>
                            Welcome to the game of rock, paper, scissors
                        </span>
                        <span className={'mt-2'}>
                        Click on any one of the three choices to start playing
                        </span>
                        <br></br>
                    </div>
                    <div className="modal-footer hv-center">
                        <button type="button" className="btn btn-secondary" onClick={() => closeModal()}>Close</button>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default WelcomePopUp;