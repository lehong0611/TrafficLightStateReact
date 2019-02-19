import React, { Component } from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super();
    this.state = { 
      CURRENTCOLOR: RED
    };

    setInterval( () => {
        this.setState({
          CURRENTCOLOR: this.getNextColor(this.state.CURRENTCOLOR)
        });
    }, 1000);
  }

  getNextColor(color) {
    switch(color) {
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        default:
            return RED;
    }
  }

  render() {
    const { CURRENTCOLOR } = this.state;
    return (
      <div className="App">
        <TrafficLight CURRENTCOLOR={CURRENTCOLOR} />
      </div>
    );
  }
}

export default App;
