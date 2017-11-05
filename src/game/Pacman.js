import React, { Component } from 'react';
import './Pacman.css';

import * as modi from './PacmanModi.js';
import { KEY_CODES } from './Keys.js';

/* Source: https://codepen.io/wifi/pen/olKxE */
class Pacman extends Component {
  state = {
    modus: modi.NONE,
  }

  componentDidMount = () => {
    window.onkeyup = this.handleKeyPress;
  }

  translateKeyCode = (event) => {
    switch(event.keyCode) {
      case KEY_CODES.ARROW_LEFT:
        return modi.LEFT;
      case KEY_CODES.ARROW_RIGHT:
        return modi.RIGHT;
      case KEY_CODES.ARROW_UP:
        return modi.UP;
      case KEY_CODES.ARROW_DOWN:
        return modi.DOWN;
      default:
        return undefined;
    }
  }

  handleKeyPress = (event) => {
    this.setState({
      modus: this.translateKeyCode(event) || this.state.modus,
    })
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
