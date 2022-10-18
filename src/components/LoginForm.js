import Form from "./Form";
import TextInput from "./TextInput";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const {signup} = useAuth();
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();
        // do validayion

        try{
            setError("");
            setLoading(true);
            await signup(email, password);
            history.push("/");
        }
        catch(err){
            console.log(err);
            setError("Failed to login");
            setLoading(true);
        }
        
    }

    function handleSubmit(e){

    }


    return (
        <Form style={{height:'330px'}} className="form " onSubmit ={handleSubmit}>
            <TextInput 
            type = "text"
            value = {email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Please enter email" 
            icon ="alternate_email" />

            <TextInput 
            type="password"  
            placeholder="Please enter password" 
            icon="lock"
            onChange={(e)=>setpassword(e.target.value)}
            /> 

            <Button 
            className="button" 
            type="submit" 
            disable={loading}>
                <span>Login</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Don't have an account? 
                <Link to="/signup" >Signup</Link>
                instead.
            </div>
        </Form>
    );
}