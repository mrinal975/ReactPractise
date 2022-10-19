import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Classes from '../styles/Videos.module.css';
import Video from './Video';

export default function Videos(){

    const [page, setPage] = useState(1);
    const {loading, error, videos, hasMore} = useVideoList(page);

    return (
        <div className={Classes.videos}>
            {videos.length>0 && 
            <InfiniteScroll 
            dataLength={videos.length}
            next={()=>setPage(page+8)}
            hasMore={hasMore}
            >
                {videos.map((video)=>(
                    video.noq>0?
                    (<Link to="/quiz" key={video.youtubeID}>
                        <Video title={video.title} id={video.youtubeID} noq={video.noq}/>
                    </Link>)
                :
                (
                    <Video title={video.title} id={video.youtubeID} noq={video.noq}/>
                )
                    
                ))}
            </InfiniteScroll>
            }
            
            {!loading && videos.length===0 && (
                <div className="">No data found</div>
            )}

            { error && <div> There was an error. </div>}
            
            {loading && <div> Loading... </div>}
        </div>
    );
}