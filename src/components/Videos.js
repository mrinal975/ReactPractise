import { Link } from "react-router-dom";
import useVideoList from "../hooks /useVideoList";
import Classes from '../styles/Videos.module.css';
import Video from './Video';
export default function Videos(){
    const {loading, error, videos} = useVideoList();
    return (
        <div className={Classes.videos}>
            {videos.map((video)=>(
                <Link to="/quiz" >
                    <Video />
                </Link>
            ))}
            
        </div>
    );
}