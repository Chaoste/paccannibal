import React, { Component } from 'react';
import './Pacman.css';

import * as modi from './PacmanModi.js';

/* Source: https://codepen.io/wifi/pen/olKxE */
class Pacman extends Component {
  state = {
    modus: modi.NONE,
  }

  getCSSModus() {
    switch(this.state.modus) {
      case modi.NONE:
        return 'none'
      case modi.UP:
        return 'up'
      case modi.LEFT:
        return 'left'
      case modi.DOWN:
        return 'down'
      case modi.RIGHT:
        return 'right'
      case modi.DYING:
        return 'dying'
      default:
        return
    }
  }

  render() {
    return (
      <div className={`pacman ${this.getCSSModus()}`}>
        <div className="pacman-top"></div>
        <div className="pacman-bottom"></div>
      </div>
    );
  }
}

export default Pacman;
