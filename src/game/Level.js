import React, { Component } from 'react';

import Feed from './Feed.js';
import Pacman from './Pacman.js';
import * as modi from './PacmanModi.js';

import './Level.css';

class Level extends Component {
  state = {
    x: 25,
    y: 38,
    dir: modi.NONE,
  };

  hasMoved = (x, y, dir) => {
    this.setState({ x, y, dir });
  }
  render() {
    const { x, y, dir } = this.state;
    return (
      <div className="level">
        <Feed x={x} y={y} dir={dir} />
        <Feed x={x} y={y} dir={dir} />
        <Feed x={x} y={y} dir={dir} />
        <Feed x={x} y={y} dir={dir} />
        <Feed x={x} y={y} dir={dir} />
        <Feed x={x} y={y} dir={dir} />
        <Feed x={x} y={y} dir={dir} />
        <Pacman hasMoved={this.hasMoved} />
      </div>
    );
  }
}

export default Level;
