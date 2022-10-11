import React from "react";
import TemperateInput from "./TemperateInput";
export default class Calculator extends React.Component{
    state = {
            temperature:'',
            scale:'c'
        };
        
    handleChange=(e, scale)=>{
        this.setState({
            temperature : e.target.value,
            scale,
        });
    }

    render(){
        const {temperature, scale} = this.state;
        
        return(
            <div>
                <TemperateInput scale="c"/>
                <TemperateInput scale="f" />
            
                {/* <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict> */}
            </div>
        );
    }
}