import React from "react";

const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
};

export default class TemperateInput extends React.Component{
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
        const {scale} = this.props;
        return(
            <fieldset>
                <legend>Enter Temperate in {scaleNames[scale]}:</legend>
                <input value={temperature} 
                onChange={this.handleChange}>
                </input>
            </fieldset>
        );
    }
}