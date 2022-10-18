import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from "./Form";
import TextInput from './TextInput';

export default function SignupForm(){
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const {signup} = useAuth();
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();
        // do validayion
        if(password !== confirmPassword){
            return setError('Password did not match');
        }

        try{
            setError("");
            setLoading(true);
            await signup(email, password, userName);
            history.push("/");
        }
        catch(err){
            setError("Failed to create an account");
            setLoading(true);
        }
        
    }

    return(
        <Form className={{height:"500px"}} onSubmit ={handleSubmit}>
            <TextInput type="text" 
            value={userName} 
            placeholder="Enter name" 
            icon="alternate_email" 
            required
            onChange={(e)=>setUsername(e.target.value)} />

            <TextInput type="email" 
            value={email} 
            placeholder="Enter name" 
            icon="alternate_email"
            required
            onChange={(e)=>setEmail(e.target.value)} />

            <TextInput type="password" 
            placeholder="Enter password" 
            icon="lock"
            required
            value={password} 
            onChange={(e)=>setpassword(e.target.value)} />

            <TextInput type="password" 
            placeholder="Confirm password" 
            icon="lock_clock"
            required
            value={confirmPassword} 
            onChange={(e)=>setConfirmPassword(e.target.value)}/>

            <Checkbox text="I agree to the Terms & Conditions" 
            value={agree} 
            required
            onChange={(e)=>setAgree(e.target.value)}/>
            
            {error && <p className='error'>{error}</p>}

            <Button type="submit" disabled={loading}>
                <span>Submit</span>
            </Button>
        </Form>
    );
}