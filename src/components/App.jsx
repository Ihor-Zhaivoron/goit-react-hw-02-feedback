import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeValue = e => {
    const name = e.currentTarget.name;
    // console.log(name);
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
      <>
        <Section title="Pelase leave feedback">
          <FeedbackOptions states={this.state} onClickBtn={this.changeValue} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
          ;
        </Section>
      </>
    );
  }
}
export default App;
