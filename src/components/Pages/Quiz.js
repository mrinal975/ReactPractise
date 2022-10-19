import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestion from "../../hooks/useQuestion";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

export default function Quiz(){

    const {id} = useParams();
    const {loading, error, questions} = useQuestion(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const initialState = null;
    const reducer = (state, action) =>{
        switch(action.type){
            case "questions":
                action.value.forEach((question)=>{
                    question.options.forEach((option)=>{
                        option.checked = false;
                    })
                });
                return action.value;
            case "answer":
                const questions = _.cloneDeep(state);
                questions[action.questionID].options[action.optionIndex].checked = action.value;
                return questions;
            default:
                return state;
        }
    }
    
    const [qna, dispatch] = useReducer(reducer, initialState);
    

    useEffect(()=>{
        dispatch({
            type:"questions",
            value: questions
        })
    },[questions]);


    //handle when user clicks the next button to get next question
    function nextQuestion(){
        if(currentQuestion+1 <questions.length){
            setCurrentQuestion((prevCurrent)=>
                prevCurrent + 1
            );
        }
        console.log('next clicked');
    }
    
    //handle when user clicks the previous button to get previous question
    function prevQuestion(){
        if(currentQuestion>=1&& currentQuestion<=questions.length){
            setCurrentQuestion((prevCurrent)=>
            prevCurrent-1
            );
        }
    }

    function handleAnswerChange(e, index){
        dispatch({
            type:"answer",
            questionID: currentQuestion,
            optionsIndex: index,
            value: e.target.checked
        })
    }
    
    
    //calculate percentage of progress
    const percentage = questions.length > 0 ?
    (((currentQuestion+1) / questions.length) * 100):0;
    return (
        <>
            {error && <div> There was an error. </div>}
            {loading && <div> Loading... </div>}
            {!loading && !error && qna && qna.length>0 && (
                <>
                    <div className="container">
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers 
                    options={qna[currentQuestion].options} 
                    handleChange={handleAnswerChange}/>
                    
                    <ProgressBar 
                    next={nextQuestion} 
                    prev={prevQuestion} 
                    percentage={percentage} />

                    <MiniPlayer/>
                    </div>
                </>
            )}
           
        </>
    );
}