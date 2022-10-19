import Summary from "../Summary";
import Analysis from "../Analysis";
import { useHistory, useParams } from "react-router-dom";
import useAnswer from "../../hooks/useAnswer";
import _ from "lodash";

export default function Result(){

    const {id} = useParams();
    const {location} = useHistory();
    const {state} = location;
    const {qna} = state;

    const {loading, error, answers} = useAnswer(id);

    console.log(state, answers);

    function Calculate(){
        let score = 0;
        
        answers.forEach((question, index1)=>{
            let correctIndex = [];
            let checkedIndex = [];

            question.options.forEach((option, index2)=>{
                if(option.correct) correctIndex.push(index2);
                if(qna[index1].options[index2].checked){
                    checkedIndex.push(index2);
                    option.checked = true;
                }
            });
            if(_.isEqual(correctIndex,checkedIndex)){
                score = score + 5;
            }
        });
        return score;
    }

    const useScope = Calculate();

    return (
        <>
        {loading &&<div>Loading... </div>}
        {error && <div>There was an error!</div>}
        {answers && answers.length>0 &&(
            <>
                <Summary score={useScope} noq={answers.length}></Summary>
                <Analysis answers={answers}></Analysis>
            </>
        )}

        </>
    );
}