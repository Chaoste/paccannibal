import React, { Component } from 'react';
import './Ghost.css';
import Lauch1 from '../res/lauch.png';
import Lauch2 from '../res/lauch.png';
import Lauch3 from '../res/lauch.png';
import Lauch4 from '../res/lauch.png';

const pics = [Lauch1, Lauch2, Lauch3, Lauch4];

class Ghost extends Component {
  mySrc = undefined;

  constructor() {
    super();
    this.mySrc = pics[1];
  }

  render() {
    return <img className="ghost" src={this.mySrc} />;
  }
}

export default Ghost;
