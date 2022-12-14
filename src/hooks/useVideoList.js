import {
    get,
    getDatabase,
    limitToFirst,
    orderByKey,
    query,
    ref,
    startAt
} from 'firebase/database';
import { useEffect, useState } from "react";

export default function useVideoList(page){
    const [loading, setLoadin] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(()=>{
        async function fetchVideos(){
            //database related works
            const db = getDatabase();
            const videosRef = ref(db, 'videos');
            const videoQuery = query(
                videosRef,
                orderByKey(),
                startAt(""+page),
                limitToFirst(8)
            );
            try{
                setError(false);
                setLoadin(true);
                const snapshot = await get(videoQuery);
                
                if(snapshot.exists()){
                    setVideos((prevVideos)=>{
                        return [...prevVideos, ...Object.values(snapshot.val())];
                    });
                }else{
                    setHasMore(false);
                }
                setLoadin(false);
            }catch(err){
                console.log('fetch data error', err);
                setLoadin(false);
                setError(true);
            }
        }
        setTimeout(()=>{
            fetchVideos();
        },2000)
    },[page]);

    return {
        loading,
        error,
        videos,
        hasMore
    };
}