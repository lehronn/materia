import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import News from '../components/News';
import History from '../components/History';
import Future from '../components/Future';
import NoFound from '../components/NoFound';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/News">News</Link></li>
              <li><Link to="/News/1">News param 1</Link></li>
              <li><Link to="/News/2">News param 2</Link></li>
              <li><Link to="/News/3">News param 3</Link></li>
              <li><Link to="/Bio/History">Bio/History</Link></li>
              <li><Link to="/Bio/Future">Bio/Future</Link></li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/News" component={News} />
              <Route path="/Bio/History" component={History} />
              <Route path="/Bio/Future" component={Future} />
              <Route component={NoFound} />
            </Switch>
          </div>
        </Router>

        </div>
    );
  }
}

export default App;
