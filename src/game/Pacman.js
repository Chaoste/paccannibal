import React, { Component } from 'react';
import './Pacman.css';

/* Source: https://codepen.io/wifi/pen/olKxE */
class Pacman extends Component {
  render() {
    return (
      <div className="pacman">
        <div className="pacman-top"></div>
        <div className="pacman-bottom"></div>
        <div className="feed"></div>
      </div>
    );
  }
}

export default Pacman;
