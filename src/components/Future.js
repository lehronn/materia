import React from 'react';

import './Home.scss';
import logo from '../assets/logo.svg';

const Future = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        Future <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default Future;