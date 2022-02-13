import React from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";
import Section from "../Section/Section";

import styles from "../Data/Feedback.module.css";
import PropTypes from "prop-types";


class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleChangeStats = (event) => {
        this.setState((prevState) => {
            return {
                [event.target.name]: prevState[event.target.name] + 1,
            };
        });
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad
    };

    countPositiveFeedbackPercentage = () => {
        
        return !this.countTotalFeedback() ? "0" : Math.round(this.state.good/this.countTotalFeedback()*100)
    };

    render() {
        return (
            <div className={styles.feedback}>
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={this.handleChangeStats} /> 
                </Section>
                <Section title="Statistics">
                {this.countTotalFeedback() ? <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
                    : <Notification message="There is no feedback"/>
                    }  
                </Section>    
            </div>
        )
    }
}

export default Feedback;

