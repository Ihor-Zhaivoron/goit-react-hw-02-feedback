import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <Section title="">
          <FeedbackOptions />
        </Section>
        <Section title="">
          <Statistics
            good={0}
            neutral={0}
            bad={0}
            total={0}
            positivePercentage={0}
          />
          <Notification message="There is no feedback"></Notification>
        </Section>
      </>
    );
  }
}
export default App;
