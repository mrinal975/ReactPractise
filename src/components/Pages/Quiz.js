import { useState } from "react";
import { useParams } from "react-router-dom";
import useQuestion from "../../hooks/useQuestion";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

export default function Quiz(){

    const {id} = useParams();
    const {loading, error, question} = useQuestion(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    

    return (
        <>
            <div className="container">
                <h1>Pick three of your favorite Star Wars Flims</h1>
                <h4>Question can have multiple answers</h4>
                <Answers/>
                <ProgressBar/>
                <MiniPlayer/>
            </div>
        </>
    );
}