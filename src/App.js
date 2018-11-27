import React, { Component } from 'react';
import { AreaChart } from 'react-easy-chart';
import './App.css';

const UPDATE_SPEED = 1000; // update interval in milliseconds

const updateData = (data) => {
  return [
    ...data
        .slice(data.length - 51)
        .map(point => ({ x: point.x - UPDATE_SPEED, y: point.y })),

      {x: 0, y: Math.random() * 25}
  ];
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: updateData(this.state.data),
      });
    }, UPDATE_SPEED);
  }

  render() {
    return (
      <AreaChart
        axes
        axisLabels={{x: 'time', y: 'Mbps'}}
        grid
        verticalGrid
        margin={{top: 30, right: 30, bottom: 30, left: 30}}
        width={1000}
        height={500}
        interpolate={'cardinal'}
        data={[this.state.data]}
        xTicks={10}
        yDomainRange={[0, 28]}
        yAxisOrientRight
      />
    );
  }
}

export default App;
