import React from "react";
function Input({type, placeholder}, ref){
    return <input ref={ref} type={type} placeholder={placeholder}></input>
}

const forwardedInput = React.forwardRef(Input);
export default forwardedInput;