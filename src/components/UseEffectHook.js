import { useEffect, useState } from "react";

export default function UseEffectHook(){
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick=()=>{
        // console.log('ticking');
        setDate(new Date());
    };

    useEffect(()=>{
        console.log('updating document title');

    },[count]);


    useEffect(()=>{
        // console.log('staring timer');
        const interval = setInterval(tick,1000);

        //do cleaning up - stop the timer
        return ()=>{
            // console.log('component unmounted');
        }
    },[])



    const addClick = ()=>{
        setCount((prevCount)=>
            prevCount+1
        );
    };

    return (
        <div>
            <p>
                Time : {date.toLocaleTimeString()}
            </p>

            <button type="button" onClick={addClick}>
            Click
            </button>
        </div>
    )

}