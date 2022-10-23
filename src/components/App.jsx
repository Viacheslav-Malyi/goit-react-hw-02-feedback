import { Component } from 'react';
import { Section } from './Sections/Section';
import { FeedbackOption } from './FeedbackOptins/FeedbackOptions';
import { FeedbackStatistick } from './FeedbackStatistick/Feedbacktatistick';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateKeys = Object.keys(this.state);

  onClickFeedback = option => () => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOption
            options={this.stateKeys}
            onLeaveFeedback={this.onClickFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total <= 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <FeedbackStatistick
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          )}
        </Section>
      </div>
    );
  }
}
