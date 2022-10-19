import {
    get,
    getDatabase, orderByKey,
    query,
    ref
} from 'firebase/database';
import { useEffect, useState } from "react";

export default function useQuestion(videoId){
    const [loading, setLoadin] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        async function fetchQuestion(){
            //database related works
            const db = getDatabase();
            const quizRef = ref(db, "quiz/"+videoId+"/questions");
            const quizQuery = query(
                quizRef,
                orderByKey()
            );
            
            try{
                setError(false);
                setLoadin(true);
                
                //request firebase database
                const snapshot = await get(quizQuery);
                
                if(snapshot.exists()){
                    setQuestions((prevQuestions)=>{
                        return [...prevQuestions, ...Object.values(snapshot.val())];
                    });
                }
                setLoadin(false);
            }catch(err){
                console.log('fetch data error', err);
                setLoadin(false);
                setError(true);
            }
        }
        fetchQuestion();
    },[videoId]);

    return {
        loading,
        error,
        questions,
    };
}