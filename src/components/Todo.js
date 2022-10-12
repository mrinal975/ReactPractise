import { useState } from "react";


function Todo(){

    const [todo, setTodo] = useState(
        {
            title :'',
            description:''
        }

    );

    const handleInput = (e)=>{
        const  inputValue = e.target.value;
        setTodo(inputValue);
    }
    const {title, description} = todo;
    return(
        <div>
            <p>{title}</p>
            <input type ="text" name="title" 
                value={title} 
                onChange={(e)=>setTodo({
                    ...todo,
                    title: e.target.value
                })}
                />
            <br/>
            <textarea name="description"
                value={description} 
                onChange={(e)=>setTodo({
                    ...todo,
                    description: e.target.value
                })}
                >
            </textarea>
            
            <hr/>
        </div>
    );
}

export default Todo;