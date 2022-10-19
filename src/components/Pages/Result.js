import Summary from "../Summary";
import Analysis from "../Analysis";
import { useHistory, useParams } from "react-router-dom";
import useAnswer from "../../hooks/useAnswer";

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
            let currectIndex = [];
            let checkedIndex = [];
        })
    }

    return (
        <>
        {loading &&<div>Loading... </div>}
        {error && <div>There was an error!</div>}
        {answers && answers.length>0 &&(
            <>
                <Summary></Summary>
                <Analysis></Analysis>
            </>
        )}

        </>
    );
}