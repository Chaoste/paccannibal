import React, { Component } from 'react';
import Ghost from './Ghost.js';
import Feed from './Feed.js';

import './Level.css';

class Level extends Component {
  render() {
    return (
      <div className="level">
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Ghost />

        {this.props.children}
      </div>
    );
  }
}

export default Level;
