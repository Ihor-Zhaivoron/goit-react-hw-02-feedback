import { Component } from 'react';

class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeValue = e => {
    const name = e.currentTarget.name;
    console.log(name);
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (good !== 0) {
      return `${Math.floor((good * 100) / this.countTotalFeedback())}%`;
    } else {
      return 0;
    }
  };

  render() {
    const countTotalFeedback = this.countTotalFeedback();
    return (
      <div>
        <div>
          <h1>Pelase leave feedback</h1>
          <button type="button" name="good" onClick={this.changeValue}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.changeValue}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.changeValue}>
            Bad
          </button>
        </div>

        <div className="">
          <h2>Statistics</h2>
          <span>Good:{this.state.good} </span>
          <span>Neutral:{this.state.neutral} </span>
          <span>Bad:{this.state.bad} </span>
          <span>Total:{countTotalFeedback}</span>
          <span>
            Positive feedback:{this.countPositiveFeedbackPercentage()}
          </span>
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
