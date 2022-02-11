import propTypes from "prop-types";

export default function Feedback () {
    return(
        <div>
            <h3>Please leave feedback</h3>
            <div>
                <button>Good</button>
                <button>Neutral</button>
                <button>Bad</button>
            </div>

        </div>
    )
}

state = {
    good: 0,
    neutral: 0,
    bad: 0
  }