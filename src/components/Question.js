import Answers from "./Answers";
import classes from "../styles/Question.module.css";
export default function Question({answers=[]}){
    
    return answers.map((answers, index)=>{
        <>
            <div className={classes.question} key={index} >
                <div className={classes.qtitle}>
                    <span className="material-icons-outlined"> help_outline </span>
                    Here goes the question from Learn with Sumit?
                </div>
                <Answers options={answers.options} input={false} />
            </div>
        </>
    });
}