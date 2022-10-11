import React from "react";
const WithCounter = (OriginalComponent) =>{

    class NewComponent extends React.Component{


        render(){
            const { count}  = this.state;
    
            return <OriginalComponent count={count}
            incrementCount={this.incrementCount}
            />
            
        }

    }
    return NewComponent;
}

export default WithCounter;