import React, { Component } from 'react';
import classNames from 'classnames';
import './TrafficLight.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
  render() {
    const { CURRENTCOLOR } = this.props;
    return (
        <div className="TrafficLight">
            <div className={classNames('bulb', 'red', {
                active: CURRENTCOLOR === RED
            })}></div>
            <div className={classNames('bulb', 'orange', {
                active: CURRENTCOLOR === ORANGE
            })}></div>
            <div className={classNames('bulb', 'green', {
                active: CURRENTCOLOR === GREEN
            })}></div>
        </div>
    );
    }
}

export default TrafficLight;