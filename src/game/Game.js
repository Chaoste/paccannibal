import React, { Component } from 'react';

import Pacman from './Pacman.js';
import Feed from './Feed.js';
import Level from './Level.js';

import './Game.css';

/* Source: https://codepen.io/wifi/pen/olKxE */
class Game extends Component {
  render() {
    return (
      <div className="game">
        <Level>
          <Feed />
          <Pacman />
        </Level>
      </div>
    );
  }
}

export default Game;
