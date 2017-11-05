import React, { Component } from 'react';

import Pacman from './Pacman.js';

import './Pacman.css';

/* Source: https://codepen.io/wifi/pen/olKxE */
class Game extends Component {
  render() {
    return (
      <div className="game">
        <Pacman />
      </div>
    );
  }
}

export default Game;
