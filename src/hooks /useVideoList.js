import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from "react";

export default function useVideoList(){
    const [loading, setLoadin] = useState(true);
    const [error, setError] = useState(true);
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        async function fetchVideos(){
            //database related works
            const db = getDatabase();
            const videosRef = ref(db, 'videos');
            const videoQuery = query(
                videosRef,
                orderByKey
            );
            
            try{
                setError(false);
                setLoadin(true);
                const snapshot = await get(videoQuery);
                setLoadin(false);
                if(snapshot.exists()){
                    setVideos((prevVideos)=>{
                        return [...prevVideos, ...Object.values](snapshot.val());
                    });
                }else{

                }
            }catch(err){
                console.log(err);
                setLoadin(false);
                setError(true);
            }
        }
    },[]);

    return {
        loading,
        error,
        videos
    };
}