import React from "react"

const Question = (props) => {

    const handleSelection = (o) => {
        console.log("Selection Made!")
        
        if(props.selected === o && props.isCorrect == 1) {
            return {
                backgroundColor: "green",
                color: "white",
                borderColor: "green"
            }
        }
        else if (props.selected === o && props.isCorrect == 0) {
            return {
                backgroundColor: "red",
                color: "white",
                borderColor: "red"
            }
        }
        
        else if (props.selected === o) {
            return {
                backgroundColor: "white",
                color: "black"
            }
            
        }
        else if (props.selected != o && props.isCorrect == 3) {
            return {
                backgroundColor: "lightgreen",
                color: "black",
                borderColor: "lightgreen"
            }
        }
        else {
            return {
                backgroundColor: "black",
                color: "white"
            }
        }
    }

    const Shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5)
    }

    const [arr] = React.useState(Shuffle([`a1`,`a2`,`a3`,`a4`]))

    return (
        <div className="question">
            <p>{props.question}</p>
            <form className="question-form">
                {arr.map((option) => {
                    const propValue = props[option]
                    return(
                        <div key={option}>
                            <input 
                                type="radio"
                                id={`${option}${props.id}`}
                                name={props.id}
                                value={option}
                                checked={props.selected === option}
                                onChange={props.onChange}
                                hidden
                            />
                            <label htmlFor={`${option}${props.id}`} className="question-label" style={handleSelection(option)}>{propValue}</label>
                        </div>
                    )
                })}
                {/* <input type="radio" id={`${arr[arr.length -1] + props.id}`} name={props.id} value={arr[arr.length -1]} checked={props.selected === arr[arr.length -1]} onChange={props.onChange}></input>
                <label htmlFor={`${arr[arr.length -1] + props.id}`} className="question-label">{props.arr.pop()}</label>
                <input type="radio" id={`${arr[arr.length -1] + props.id}`} name={props.id} value={arr[arr.length -1]} checked={props.selected === arr[arr.length -1]} onChange={props.onChange}></input>
                <label htmlFor={`${arr[arr.length -1] + props.id}`}className="question-label">{props.arr.pop()}</label>
                <input type="radio" id={`${arr[arr.length -1] + props.id}`} name={props.id} value={arr[arr.length -1]} checked={props.selected === arr[arr.length -1]} onChange={props.onChange}></input>
                <label htmlFor={`${arr[arr.length -1] + props.id}`} className="question-label">{props.arr.pop()}</label>
                <input type="radio" id={`${arr[arr.length -1] + props.id}`} name={props.id} value={arr[arr.length -1]} checked={props.selected === arr[arr.length -1]} onChange={props.onChange}></input>
                <label htmlFor={`${arr[arr.length -1] + props.id}`} className="question-label">{props.arr.pop()}</label> */}
            </form>
        </div>
    )
}

export default Question