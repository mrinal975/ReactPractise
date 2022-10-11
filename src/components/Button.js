import React from "react";

class Button extends React.Component{

    shouldComponentUpdate(nextProps){
        const { change:currentChange, local:currentLocale } = this.props;
        const { change:nextChange, local:nextLocale} = nextProps;
        if(currentChange === nextChange && nextLocale===currentLocale){
            return false;
        }
        return true;
    }

    render(){
        const {change, local, show, enable} = this.props;
        // console.log(change, local);
        if(!enable) return null;
        return (
            <>
            <button type="button" onClick={()=>change(local)}>
                {local=='bn-BD'?'change clock':'ঘড়ি পরিবর্তন'}
            </button>
            {show && <p>Hello</p>}
            </>
        );
    }
}

export default Button;