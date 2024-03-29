import PropTypes from "prop-types";
import styles from "../Data/Statistics.module.css";

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <ul className={styles.listStat}>
            <li className={styles.item}>Good: {good} </li>
            <li className={styles.item}>Neutral: {neutral} </li>
            <li className={styles.item}>Bad: {bad} </li>
            <li className={styles.item}>Total: {total}</li>
            <li className={styles.item}>Positive feedback: {positivePercentage}%</li>
        </ul>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
        
}