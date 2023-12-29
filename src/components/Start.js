import React from "react"

const Start = (props) => {
    return (<div className="start-container">
            <img src="./images/quizzler-white.png" className="logo"/>
            <p>Have you got the rizz of the quizz?</p>
            <button className="start-btn" onClick={props.clickHandler}>Start</button>
        </div>
    )
}
export default Start