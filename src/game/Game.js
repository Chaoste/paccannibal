import React, { Component } from 'react';

import Pacman from './Pacman.js';
import Feed from './Feed.js';

import './Game.css';

/* Source: https://codepen.io/wifi/pen/olKxE */
class Game extends Component {
  render() {
    return (
      <div className="game">
        <Feed />
        <Pacman />
      </div>
    );
  }
}

export default Game;
