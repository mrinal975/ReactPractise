import Illustration from "../Illustration";
import signInLogo from '../../assets/1.png';
import LoginForm from "../LoginForm";

export default function Login(){
    return (
        <>
        <h1>Login to your account</h1>
        <div className="column">
            <Illustration image={signInLogo}/>
            <LoginForm/>
        </div>
        </>
    );
}