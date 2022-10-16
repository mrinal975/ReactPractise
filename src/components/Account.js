import classes from '../assets/Account.module.css';
export default function Account(){
    return (
        <div className={classes.account}>
            <span className={classes.material-icons-outlined} title="Account">
            account_circle
            </span>
            <a href="signup.html">Signup</a>
        </div>
    );
}