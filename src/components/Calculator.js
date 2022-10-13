import React from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";
import BoilingVerdict from "./BoilingVerdict";
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
        const celsius = scale==='f' ?convert(temperature, toCelsius):temperature;
        const fahrenheit = scale==='c'?convert(temperature, toFahrenheit):temperature;
        
        return(
            <div>
                
                <TemperateInput scale="c" temperature={celsius}
                onTemperatureChange={this.handleChange}/>

                <TemperateInput scale="f" temperature={fahrenheit}
                onTemperatureChange={this.handleChange}/>
            
                <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
            </div>
        );
    }
}