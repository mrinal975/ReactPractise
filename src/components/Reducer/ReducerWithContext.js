import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action)=>{
    console.log('reducer called');
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default :
            return state;        
    }
};

export default function ReducerWithContext(){
    const [count, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            <div>Count - {count}</div>
            <button type="button" onClick={()=>dispatch('increment')}>Increment</button>
            <button type="button" onClick={()=>dispatch('decrement')}>Decrement</button>
        </div>
    );
}