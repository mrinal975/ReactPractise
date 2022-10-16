import classes from '../../styles/Sigup.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from '../TextInput';

export default function Signup(){
    return (
        <>
            <h1>Create an account</h1>

            <div className={classes.column}>
                <Illustration></Illustration>
                <Form className={`${classes.signup}`}>
                    <TextInput type="text" placeholder="Enter name" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
                    <Checkbox text="I agree to the Terms & Conditions" />
                    <Button>Submit</Button>
            </Form>
            </div>
        </>
    );
}