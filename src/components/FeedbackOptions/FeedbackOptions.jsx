import styles from "../Data/FeedbackOptions.module.css";

export default function FeedbackOptions({ onLeaveFeedback }) {
    return (
        <div className={styles.options}>
            <button className={styles.button} name="good"  onClick={onLeaveFeedback}>Good</button>
            <button className={styles.button} name="neutral"  onClick={onLeaveFeedback}>Neutral</button>
            <button className={styles.button} name="bad" onClick={onLeaveFeedback}>Bad</button>
        </div>
    )
};

