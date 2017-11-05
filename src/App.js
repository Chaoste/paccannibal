import React, { Component } from 'react';

import Game from './game/Game.js';
import Preview from './preview/Preview.js';

import './App.css';
import salami from './res/009-salami.png';
class App extends Component {
  state = {
    isStarting: false,
    isStarted: false,
    isEating: false,
  };

  onClick = event => {
    this.setState({
      isStarting: true,
    });
    setTimeout(() => {
      this.setState({
        isStarting: false,
        isEating: true,
      });
    }, 1000);
    setTimeout(() => {
      this.setState({
        isStarted: true,
      });
    }, 2500);
  };

  renderStartButton() {
    return (
      <div className={`buttoncontainer ${this.state.isEating ? 'eating' : ''}`}>
        <Preview isStarting={this.state.isStarting} isEating={this.state.isEating} />
        <button className="start" onClick={this.onClick}>
          LETS GO!!!
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={salami} className="App-logo" alt="salami" />
          <img className="fire" src="https://www.gif-paradies.de/gifs/natur/feuer/feuer_0079.gif"/>
          <h1 className="App-title">WELCOME TO PACCANNIBAL</h1>
        </header>
        <p className="App-intro" />
        {!this.state.isStarted ? this.renderStartButton() : <Game />}
      </div>
    );
  }
}

export default App;
