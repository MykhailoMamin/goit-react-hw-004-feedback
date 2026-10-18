import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const onLeaveFeedback = option => {
    switch (option) {
        case "good":
            setGood(prev => prev + 1)
            break;
        case "neutral":
            setNeutral(prev => prev + 1)
            break;
        case "bad":
            setBad(prev => prev + 1)
            break;
        }
    }

    const countTotalFeedback = () => {
        const total = good + neutral + bad;
        return total;
    }

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback()
        let positivePercentage = 0;
        if (total > 0) {
            positivePercentage = (good / total) * 100;
            return Math.round(positivePercentage);
        } else {
            return positivePercentage
        }
    }
    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
        {countTotalFeedback() > 0 ?
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section> : <Notification message="There is no feedback" />
          }
      </>
    )
}