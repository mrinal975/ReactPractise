import { useEffect, useRef } from "react";
import Input from "./Input";
function UseRef(){

    const inputRef = useRef('');

    useEffect(()=>{
        //component did load
        // console.log(inputRef.current);
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <p>
                <Input ref={inputRef} type="text" placeholder ="Enter something"/>
            </p>
        </div>
    );
}

export default UseRef;