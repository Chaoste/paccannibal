import React, { Component } from 'react';

import AutoPacman from './AutoPacman.js';
import RunningFeed from './RunningFeed.js';

import './Preview.css';

/* Source: https://codepen.io/wifi/pen/olKxE */
class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <RunningFeed />
        <AutoPacman />
      </div>
    );
  }
}

export default Preview;
