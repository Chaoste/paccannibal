import React, { Component } from 'react';

import logo from './logo.svg';
import Game from './game/Game.js';

import './App.css';
import salami from './009-salami.png';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={salami} className="App-logo" alt="salami" />
          <h1 className="App-title">Welcome to Paccanibal</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Game />
      </div>
    );
  }
}

export default App;
