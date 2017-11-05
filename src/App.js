import React, { Component } from 'react';

import Game from './game/Game.js';
import Preview from './preview/Preview.js';

import './App.css';
import salami from './res/009-salami.png';
class App extends Component {
  state = {
    isStarted: false,
  };

  onClick = event => {
    this.setState({
      isStarted: true,
    });
  };

  renderStartButton() {
    return (
      <div className="buttoncontainer">
        <Preview />
        <button className="start" onClick={this.onClick}>
          Start
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={salami} className="App-logo" alt="salami" />
          <h1 className="App-title">Welcome to Paccanibal</h1>
        </header>
        <p className="App-intro" />
        {!this.state.isStarted ? this.renderStartButton() : <Game />}
      </div>
    );
  }
}

export default App;
