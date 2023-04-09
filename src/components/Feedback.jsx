import React, { Component } from "react";
import Statistics from './Statistics';

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
        <div>Please leave feedback</div>
        <button name="good" onClick={this.handleClick}>Good</button>
        <button name="neutral" onClick={this.handleClick}>Neutral</button>
        <button name="bad" onClick={this.handleClick}>Bad</button>
        <Statistics good={''} neutral={''} bad={''} total={''} positivePercentage={''}></Statistics>
        <div>Statistics</div>
        <p>Good: <span>{good}</span></p>
        <p>Neutral: <span>{neutral}</span></p>
        <p>Bad: <span>{bad}</span></p>
        <p>Total: <span>{totalFeedbacks}</span></p>
        <p>Positive feedback: <span>{positiveFeedbacks}%</span></p>
      </>
      )
  }
}

export default Counter;