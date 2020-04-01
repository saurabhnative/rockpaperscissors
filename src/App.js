import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import BasicRPS from './components/BasicRPS/BasicRPS';
function App() {
  return (
    <div className="App d-flex flex-column align-items-center">
      <div className="container">
        <Header />
        <BasicRPS />
      </div>
    </div>
  );
}

export default App;
