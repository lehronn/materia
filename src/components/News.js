import React from 'react';

import './Home.scss';
import logo from '../assets/logo.svg';

const News = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        News <code>src/App.js</code> and save to reload.
      </p>
      {/* <p>news id: {this.props.match.params.id}</p> przekazać trzeba w propsach */}
    </div>
  );
}

export default News;