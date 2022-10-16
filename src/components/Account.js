import classes from '../styles/Account.module.css';
export default function Account(){
    return (
        <div className={classes.account}>
            <span className={classes.materialIconsOutlined} title="Account">
            account_circle
            </span>
            <a href="signup.html">Signup</a>
        </div>
    );
}