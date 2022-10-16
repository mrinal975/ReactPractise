import Illustration from "../Illustration";
import classes from '../../styles/Login.module.css';
import Form from "../Form";
import TextInput from "../TextInput";
import Button from "../Button";
import signInLogo from '../../assets/1.png';
export default function Login(){
    return (
        <>
        <h1>Login to your account</h1>
        <div className="column">
            <Illustration image={signInLogo}/>
            <Form className={`${classes.login} form`}>
                <TextInput type="text" placeholder="Please enter email" icon="alternate_email" />
                <TextInput type="password"  placeholder="Please enter password" icon="lock" /> 
                <Button className="button"><span>Login</span></Button>
                <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
            </Form>
            

            {/* <form class="login form" action="#">
                <div class="textInput">
                    <input type="text" placeholder="Enter email" />
                    <span class="material-icons-outlined"> alternate_email </span>
                </div>

                <div class="textInput">
                    <input type="password" placeholder="Enter password" />
                    <span class="material-icons-outlined"> lock </span>
                </div>

                <button class="button">
                    <span>Submit now</span>
                </button>

                <div class="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
            </form> */}
        </div>
        </>
    );
}