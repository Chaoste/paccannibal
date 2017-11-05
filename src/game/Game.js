import React, { Component } from 'react';

import Level from './Level.js';

import './Game.css';

/* Source: https://codepen.io/wifi/pen/olKxE */
class Game extends Component {
  render() {
    return (
      <div className="game">
        <Level />
      </div>
    );
  }
}

export default Game;
