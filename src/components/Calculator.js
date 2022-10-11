import React from "react";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
        };
    }
    
    handleChange=(e)=>{
        this.setState({
            temperature : e.target.value,
        });
    }

    render(){
        const {temperature} = this.state;
        return(
            <fieldset>
                <legend>Enter Temperate in Celsius</legend>
                <input value={temperature} 
                onChange={this.handleChange}>
                </input>
                <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
            </fieldset>
        );
    }
}