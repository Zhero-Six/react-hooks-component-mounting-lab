import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerIDs: [],
    };
    this.handleAddTimer = this.handleAddTimer.bind(this);
  }

  handleAddTimer() {
    this.setState((prevState) => ({
      timerIDs: [...prevState.timerIDs, Math.random()],
    }));
  }

  componentDidMount() {
    this.handleAddTimer();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAddTimer}>Add Timer</button>
        <div className="TimerGrid">
          {this.state.timerIDs.map((id) => (
            <Timer key={id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;