import signupImg from '../assets/signup.png';
import classes from '../styles/Illustration.module.css';
export default function Illustration(){
    return (
        <div className={classes.illustration}>
            <img src={signupImg} alt="Signup" />
        </div>
    );
}