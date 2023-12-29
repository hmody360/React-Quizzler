import React from "react"
import Start from "./components/Start"
import Question from "./components/Question"
import Results from "./components/Results"



function App() {

    const [startGame, setStartGame] = React.useState(true)
    const [isFinished, setIsFinished] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const [rightQuestions, setRightQuestions] = React.useState(0)
    const [formData, setFormData] = React.useState({
        0: ``,
        1: ``,
        2: ``,
        3: ``,
        4: ``
    })
    const [isCorrect, setIsCorrect] = React.useState({
        0: 2,
        1: 2,
        2: 2,
        3: 2,
        4: 2
    })


    const BeginGame = () => {
        setStartGame(false)
        console.log("Game Started!");
    }
    const handleChange = (event) => {
        const {name, value} = event.target
        console.log(event.target)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: `${value}`
            }
        })

    }
    const checkAnswers = () => {
        setIsFinished((prev) => !prev)
        for (let i = 0 ; i <= 4; i++){
            if(formData[i] === 'a1'){
                setRightQuestions((prevRightQuestions) => prevRightQuestions + 1)
                setIsCorrect((prevIsCorrect) => {
                    return{
                        ...prevIsCorrect,
                        [i]: 1 
                    }
                })
            } else {
                setIsCorrect((prevIsCorrect) => {
                    return{
                        ...prevIsCorrect,
                        [i]: 0 
                    }
                })
            }
        }
    }
    const resetGame = () => {
        setStartGame(true)
        setIsFinished(false)
        setRightQuestions(0)
    setFormData({
        0: ``,
        1: ``,
        2: ``,
        3: ``,
        4: ``
    })
    setIsCorrect({
        0: 2,
        1: 2,
        2: 2,
        3: 2,
        4: 2
    })
    }

    React.useEffect(() => {
        if (startGame) {

        
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(list => list.json())
        .then(questions => setQuestions(() => {
            let arr = []
            for (let i = 0; i <= 4 ; i++) {
                let questionObj = {
                    id: i,
                    question: questions.results[i].question,
                    answer1: questions.results[i].correct_answer,
                    answer2: questions.results[i].incorrect_answers[0],
                    answer3: questions.results[i].incorrect_answers[1],
                    answer4: questions.results[i].incorrect_answers[2],

                }
                arr.push(questionObj)
                
            }
            return arr
        }
        
        ))
    }}, [startGame])
    console.log(formData)

    return(
        <div className="app-container">
            {startGame && <Start clickHandler={BeginGame}/>}
            {!startGame && <div className="question-container">
                <Question id={questions[0].id} question={questions[0].question} a1={questions[0].answer1} a2={questions[0].answer2} a3={questions[0].answer3} a4={questions[0].answer4} selected={formData[0]} onChange={handleChange} isCorrect={isCorrect[0]}/>
                <Question id={questions[1].id} question={questions[1].question} a1={questions[1].answer1} a2={questions[1].answer2} a3={questions[1].answer3} a4={questions[1].answer4} selected={formData[1]} onChange={handleChange} isCorrect={isCorrect[1]}/>
                <Question id={questions[2].id} question={questions[2].question} a1={questions[2].answer1} a2={questions[2].answer2} a3={questions[2].answer3} a4={questions[2].answer4} selected={formData[2]} onChange={handleChange} isCorrect={isCorrect[2]}/>
                <Question id={questions[3].id} question={questions[3].question} a1={questions[3].answer1} a2={questions[3].answer2} a3={questions[3].answer3} a4={questions[3].answer4} selected={formData[3]} onChange={handleChange} isCorrect={isCorrect[3]}/>
                <Question id={questions[4].id} question={questions[4].question} a1={questions[4].answer1} a2={questions[4].answer2} a3={questions[4].answer3} a4={questions[4].answer4} selected={formData[4]} onChange={handleChange} isCorrect={isCorrect[4]}/>
            </div>}
            {!startGame && <Results checkFunc={checkAnswers} resetFunc={resetGame} isFinished={isFinished} rightAnswers={rightQuestions}/>}
        </div>
    )
}
export default App