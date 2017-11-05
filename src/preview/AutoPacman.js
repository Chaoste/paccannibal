import React, { Component } from 'react';
import './AutoPacman.css';

/* Source: https://codepen.io/wifi/pen/olKxE */
class AutoPacman extends Component {
  render() {
    return (
      <div className={`auto-pacman ${this.props.isStarting ? 'moving' : ''} ${this.props.isEating ? 'eating' : ''}`}>
        <div className="pacman-top"></div>
        <div className="pacman-bottom"></div>
        <div className="tail"></div>
      </div>
    );
  }
}

export default AutoPacman;
