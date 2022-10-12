import { useEffect, useReducer } from "react";

const initialState = {
    loading:true,
    error:'',
    post:{}
};

const reducer=(state, action)=>{
    switch(action.type){
        case 'success':
            return {
                loading:false,
                post:action.result,
                error:''
            }
        case 'error':
            return {
                loading:false,
                post:{},
                error: 'There was a problem'
            }
        default :
            return false;
    }
    
}
export default function GetPost2(){
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/possts/1')
        .then((response)=>response.json())
        .then((data)=>{
            dispatch({type:'success', result:data})
        })
        .catch(()=>{
            console.log('error .......')
            dispatch({type:'error'})
        });
    },[])

    return (
        <div>
            {state.loading? 'Loading ......': state.post.title}
            {state.error?state.error:null}
            <p>gg</p>
        </div>
    );
}