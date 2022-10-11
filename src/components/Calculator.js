import React from "react";
import TemperateInput from "./TemperateInput";
export default class Calculator extends React.Component{
    handleChange=(e)=>{
        this.setState({
            temperature : e.target.value,
        });
    }

    render(){
        return(
            <div>
                <TemperateInput scale="c"/>
                <TemperateInput scale="f" />
            
                {/* <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict> */}
            </div>
        );
    }
}