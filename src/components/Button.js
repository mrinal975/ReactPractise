import React from "react";

class Button extends React.Component{
    constructor(props) {
        super(props);
    }
    

    shouldComponentUpdate(nextProps){
        const { change:currentChange, local:currentLocale } = this.props;
        const { change:nextChange, local:nextLocale} = nextProps;
        if(currentChange === nextChange && nextLocale===currentLocale8){
            return false;
        }
        return true;
    }

    render(){
        const {change} = this.props;
        return (
            <button type="button" onClick={change}>
                Click here
            </button>
        );
    }
}

export default Button;