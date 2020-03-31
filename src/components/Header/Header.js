import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="header col-10 col-lg-6 mt-5">
                <div className="row h-100 d-flex align-items-center px-2">
                    <div className="col-10 d-flex flex-column">
                        <div>ROCK</div> 
                        <div>PAPER</div>
                        <div>SCISSORS</div>
                    </div>
                    <div className="col-2 scores-container h-100 my-2">

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
