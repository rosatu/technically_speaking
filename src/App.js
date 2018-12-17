import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Episodes from './components/Episodes'
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="component-wrap">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/episodes" component={Episodes} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
