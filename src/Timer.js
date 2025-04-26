import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.clockTick = this.clockTick.bind(this);
  }

  clockTick() {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

export default Timer;