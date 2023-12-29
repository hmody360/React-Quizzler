import React from "react"

const Results = (props) => {
    return(
        <div className="results-container">
            {props.isFinished && <p className="results">{`You got ${props.rightAnswers}/5 of the questions right!`}</p>}
            {props.isFinished && <button className="reset-btn" onClick={props.resetFunc}>Reset</button>}
            {!props.isFinished && <button className="check-btn" onClick={props.checkFunc}>Check Answers</button>}
        </div>
    )
}

export default Results