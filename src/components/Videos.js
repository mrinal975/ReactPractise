import Classes from '../styles/Videos.module.css';
import Video from './Video';
import { Link } from "react-router-dom";
export default function Videos(){
    return (
        <div className={Classes.videos}>
            <Link to="/quiz" >
                <Video />
            </Link>
            <Link to="/quiz" >
                <Video />
            </Link>
            <Link to="/quiz" >
                <Video />
            </Link>
            <Link to="/quiz" >
                <Video />
            </Link>
        </div>
    );
}