import React, { Component } from 'react';
import './Ghost.css';
import Lauch1 from '../res/lauch.png';
import Lauch2 from '../res/lauch.png';
import Lauch3 from '../res/lauch.png';
import Lauch4 from '../res/lauch.png';

const pics = [Lauch1, Lauch2, Lauch3, Lauch4];

class Ghost extends Component {
  mySrc = undefined;
  state = {
    moving: false,
  };

  constructor() {
    super();
    this.mySrc = pics[1];
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        moving: true,
      });
    }, 5000);
  }

  render() {
    return (
      <img
        className={`ghost ${this.state.moving ? 'moving' : ''}`}
        src={this.mySrc}
      />
    );
    <div className="mymove" />;
  }
}

export default Ghost;
