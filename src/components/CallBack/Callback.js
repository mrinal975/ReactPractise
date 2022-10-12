import { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import ShowCount from "./ShowCount";
import Title from "./Title";

export default function Callback(){
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    
    const incrementByOne = useCallback(()=>{
        setCount1((prevCount)=>prevCount+1);
    },[]);

    const incrementByFive = useCallback(()=>{
        setCount2((prevCount)=>prevCount+5);
    },[]);

    const isEvenOrOdd = useMemo(()=>{
        let i = 0;
        while(i < 1000000000) i+=1
        return count1 % 2 === 0;
    },[count1]);

    return (
        <div>
            <Title />
            <ShowCount count={count1} title ="Count 1"></ShowCount>
            <span>{isEvenOrOdd?'Even':'Odd'}</span>
            <Button handleClick = {incrementByOne}>Increment by One</Button>
            <br/>
            <br/>
            <ShowCount count={count2} title="count 2"></ShowCount>
            <Button handleClick={incrementByFive}> Increment by five</Button>
        </div>
    );
}