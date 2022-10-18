import classes from '../../styles/Sigup.module.css';
import Illustration from "../Illustration";
import signupImg from '../../assets/3.jpg';
import SignupForm from '../SignupForm';

export default function Signup(){
    return (
        <>
            <h1>Create an account</h1>

            <div className={classes.column}>
                <Illustration image={signupImg}></Illustration>
                <SignupForm/>
            </div>
        </>
    );
}