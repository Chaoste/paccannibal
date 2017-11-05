import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import salami from './009-salami.png';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={salami} className="App-logo" alt="salami" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
