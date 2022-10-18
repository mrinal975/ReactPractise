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

        </div>
        </>
    );
}