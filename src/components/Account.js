import classes from '../styles/Account.module.css';
import { Link } from "react-router-dom";
export default function Account(){
    return (
        <div className={classes.account}>
            <span className={classes.materialIconsOutlined} title="Account">
            account_circle
            </span>
            <Link to="/signup">Signup</Link>
        </div>
    );
}