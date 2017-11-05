import React, { Component } from 'react';
import './Feed.css';
import meat from '../res/011-meat.png';
import meat2 from '../res/008-kebab.png';
import meat3 from '../res/012-steak.png';
import meat4 from '../res/013-fish.png';

import * as modi from './PacmanModi.js';

const images = [meat, meat2, meat3, meat4];

class Feed extends Component {
  mySrc = undefined;
  node = undefined;
  state = {
    hidden: false,
  }

  getCenter() {
    const bounds = this.node.getBoundingClientRect();
    return {
      x: bounds.left + bounds.width / 2,
      y: bounds.top + bounds.height / 2,
    }
  }

  eatsMe(x, y, dir) {
    const xDiff = this.getCenter().x - x;
    const yDiff = this.getCenter().y - y;
    if (Math.abs(xDiff) < 40 && Math.abs(yDiff) < 40) {
      if (dir === modi.RIGHT && xDiff > 0 && Math.abs(yDiff) < 30) {
        return true;
      } else if (dir === modi.LEFT && xDiff < 0 && Math.abs(yDiff) < 30) {
        return true;
      } else if (dir === modi.DOWN && yDiff > 0 && Math.abs(xDiff) < 30 ) {
        return true;
      } else if (dir === modi.UP && yDiff < 0 && Math.abs(xDiff) < 30 ) {
        return true;
      }
    }
    return false;
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.hidden) return;
    if (this.eatsMe(nextProps.x, nextProps.y, nextProps.dir)) {
      this.setState({
        hidden: true,
      })
    }
  }

  constructor() {
    super();
    this.mySrc = images[Math.floor(Math.random() * 4)];
  }

  render() {
    return <img className={`feed ${this.state.hidden ? 'hidden' : ''}`} src={this.mySrc} ref={n => this.node = n} />
  }
}

export default Feed;
