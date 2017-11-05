import React, { Component } from 'react';
import './Feed.css';
import meat from '../res/011-meat.png';
import meat2 from '../res/008-kebab.png';
import meat3 from '../res/012-steak.png';
import meat4 from '../res/013-fish.png';

const images = [meat, meat2, meat3, meat4];

class Feed extends Component {
  mySrc = undefined;

  constructor() {
    super();
    this.mySrc = images[Math.floor(Math.random() * 4)];
  }

  render() {
    return <img className="feed" src={this.mySrc} />;
  }
}

export default Feed;
