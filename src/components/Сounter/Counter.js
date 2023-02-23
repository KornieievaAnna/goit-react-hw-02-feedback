import { Feedback, Statistic, Section, Notification } from 'components/index';
import css from './Counret.module.css';

// import Statistic from 'components/Сounter/Statistics/Statistics';
// import Section from 'components/Сounter/Section/Section';
// import Notification from 'components/Сounter/Statistics/Notification/Notification';
import React, { Component } from 'react';
// import css from './Counret.module.css';

class Couter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
    return 0;
  };

  showFeedback = options => {
    this.setState(prevState => ({ [options]: prevState[options] + 1 }));
  };

  // handleIncrementGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // handleIncrementNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handleIncrementBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  render() {
    return (
      <div className={css.counter}>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.showFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
export default Couter;
