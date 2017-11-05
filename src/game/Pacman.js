import React, { Component } from 'react';
import './Pacman.css';

import * as modi from './PacmanModi.js';

/* Source: https://codepen.io/wifi/pen/olKxE */
class Pacman extends Component {
  state = {
    modus: modi.NONE,
  }

  render() {
    return (
      <div className="pacman">
        <div className="pacman-top"></div>
        <div className="pacman-bottom"></div>
      </div>
    );
  }
}

export default Pacman;
