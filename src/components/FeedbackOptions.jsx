import React from 'react';

class FeedbackOptions extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeValue = () => {
    this.setState({ good: 0, neutral: 0, bad: 0 });

    this.setState(preState => ({
      good: preState.good + 1,
      neutral: preState.neutral + 1,
      bad: preState.bad + 1,
    }));
  };

  render() {
    return (
      <div>
        <div>
          <h1>Pelase leave feedback</h1>
          <button type="button" onClick={this.changeValue}>
            Good
          </button>
          <button type="button" onClick={this.changeValue}>
            Neutral
          </button>
          <button type="button" onClick={this.changeValue}>
            Bad
          </button>
        </div>
        <div className="">
          <h2>Statistics</h2>
          <span>Good:{this.state.good} </span>
          <span>Neutral: </span>
          <span>Bad: </span>
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
