import React, { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState((state) => ({
      [option]: state[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback()
    let positivePercentage = 0;
    if (total > 0) {
      positivePercentage = (this.state.good / total) * 100;
      return Math.round(positivePercentage);
    } else {
      return positivePercentage
      }
    }

  render() {
    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
        {this.countTotalFeedback() > 0 ?
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section> : <Notification message="There is no feedback" />
          }
      </>
    );
  }
}
