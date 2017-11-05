import React, { Component } from 'react';

import AutoPacman from './AutoPacman.js';
import RunningFeed from './RunningFeed.js';

import './Preview.css';

/* Source: https://codepen.io/wifi/pen/olKxE */
class Preview extends Component {
  render() {
    return (
      <div className={`preview ${this.props.isStarting ? 'moving' : ''} ${this.props.isEating ? 'eating' : ''}`}>
        <AutoPacman isEating={this.props.isEating} isStarting={this.props.isStarting} />
      </div>
    );
  }
}

export default Preview;
