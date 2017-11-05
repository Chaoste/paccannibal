import React, { Component } from 'react';

import Pacman from './Pacman.js';
import Level from './Level.js';

import './Game.css';

/* Source: https://codepen.io/wifi/pen/olKxE */
class Game extends Component {
  render() {
    return (
      <div className="game">
        <Level>
          <Pacman />
        </Level>
      </div>
    );
  }
}

export default Game;
