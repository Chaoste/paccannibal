import React, { Component } from 'react';
import './Pacman.css';

import * as modi from './PacmanModi.js';
import { KEY_CODES } from './Keys.js';

const FPS = 30;

/* Source: https://codepen.io/wifi/pen/olKxE */
class Pacman extends Component {
  state = {
    modus: modi.NONE,
    x: 25,
    y: 38,
  }
  node = undefined;
  timer = undefined;

  componentDidMount = () => {
    window.onkeyup = this.handleKeyPress;
  }

  hittingWall = (x, y) => {
    return x < -15 || y < -15 || y > 113;
  }

  hittingGhost = (x, y) => {
    const ghost = document.querySelector('.ghost');
    const rect = this.node.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const ghostRect = ghost.getBoundingClientRect();
    const ghostX = ghostRect.left + ghostRect.width / 2;
    const ghostY = ghostRect.top + ghostRect.height / 2;
    return Math.abs(centerX - ghostX) < 20 && Math.abs(centerY - ghostY) < 20;
  }

  die = () => {
    this.setState({
      modus: modi.DYING,
    });
  }

  changePosition = (x, y) => {
    if (this.hittingWall(this.state.x + x, this.state.y + y))
      return;
    if (this.hittingGhost(this.state.x + x, this.state.y + y)) {
      this.die();
      return;
    }
    this.setState({
      x: this.state.x + x,
      y: this.state.y + y,
    });
    const rect = this.node.getBoundingClientRect();
    this.props.hasMoved(
      rect.left + rect.width / 2, rect.top + rect.height / 2, this.state.modus
    );
    return true;
  }

  moving = () => {
    this.timer = setTimeout(this.moving, 1000 / FPS);
    switch(this.state.modus) {
      case modi.LEFT:
        return this.changePosition(-4, 0);
      case modi.RIGHT:
        return this.changePosition(4, 0);
      case modi.UP:
        return this.changePosition(0, -4);
      case modi.DOWN:
        return this.changePosition(0, 4);
      case modi.NONE:
      default:
        clearTimeout(this.timer);
        return;
    }
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
        return modi.NONE;
    }
  }

  handleKeyPress = (event) => {
    const oldModus = this.state.modus;
    this.setState({
      modus: this.translateKeyCode(event) || this.state.modus,
    });
    if (this.state.modus !== oldModus) {
      clearTimeout(this.timer);
      this.moving();
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
      <div
        className={`pacman ${this.getCSSModus()}`}
        onKeyDown={this.handleKeyPress}
        ref={n => this.node = n}
        style={{
          left: `${this.state.x}px`,
          top: `${this.state.y}px`,
        }}
      >
        <div className="pacman-top"></div>
        <div className="pacman-bottom"></div>
      </div>
    );
  }
}

export default Pacman;
