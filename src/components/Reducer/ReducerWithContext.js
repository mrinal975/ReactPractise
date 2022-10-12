import React, { useReducer } from "react";
import ComponentA from "./ComponentA";

export const counterContext = React.createContext();
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
            <div>Count:  {count}</div>
            <counterContext.Provider value={{countDispatch: dispatch}}>
                <ComponentA />
            </counterContext.Provider>
        </div>
    );
}