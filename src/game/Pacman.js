import React, { Component } from 'react';
import './Pacman.css';

import * as modi from './PacmanModi.js';
import { KEY_CODES } from './Keys.js';

/* Source: https://codepen.io/wifi/pen/olKxE */
class Pacman extends Component {
  state = {
    modus: modi.NONE,
  }

  handleKeyPress = (event) => {
    console.log(event.key === KEY_CODES.ARROW_LEFT)
    console.log(event.key === KEY_CODES.ARROW_UP)
    console.log(event.key === KEY_CODES.ARROW_RIGHT)
    console.log(event.key === KEY_CODES.ARROW_DOWN)
    if(event.key == 'Enter'){
      console.log('enter press here! ')
    }
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
      <div className={`pacman ${this.getCSSModus()}`} onKeyDown={this.handleKeyPress}>
        <div className="pacman-top"></div>
        <div className="pacman-bottom"></div>
      </div>
    );
  }
}

export default Pacman;
