import React, { Component } from "react";
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 }
    })
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prev, curr) => {
      return prev + curr
    }, 0);
  };
  
  countPositiveFeedbackPercentage = (total) => {
    const result = parseInt(this.state.good / total * 100);
    return result ? result : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedbacks = this.countPositiveFeedbackPercentage(totalFeedbacks);

    return (
      <>
        <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
        </Section>
        {totalFeedbacks > 0
        ? (<Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedbacks} positivePercentage={positiveFeedbacks} />
          </Section>)
        : (<Notification message ="There is no feedback" />)
        }
      </>
      )
  }
}

export default Counter;