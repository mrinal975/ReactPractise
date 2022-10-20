import {
    get,
    getDatabase, orderByKey,
    query,
    ref
} from 'firebase/database';
import { useEffect, useState } from "react";

export default function useAnswer(videoId){
    const [loading, setLoadin] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(()=>{
        async function fetchAnswers(){
            //database related works
            const db = getDatabase();
            const asnwerRef = ref(db, "answers/"+videoId+"/questions");
            const answerQuery = query(
                asnwerRef,
                orderByKey()
            );
            
            try{
                setError(false);
                setLoadin(true);
                
                //request firebase database
                const snapshot = await get(answerQuery);

                if(snapshot.exists()){
                    setAnswers((prevAnswers)=>{
                        return [...prevAnswers, ...Object.values(snapshot.val())];
                    });
                }
                setLoadin(false);
            }catch(err){
                console.log('fetch data error', err);
                setLoadin(false);
                setError(true);
            }
        }
        fetchAnswers();
    },[videoId]);
    return {
        loading,
        error,
        answers,
    };
}