import React from "react";

export default class RenderPropsHoverCounter extends React.Component {
    state = {
        count :0,
    };

    incrementCount= () => {
        this.setState((prevState)=>({
            count: prevState.count +1
        }));
    }

    render(){
        const {count} = this.state;
        return (
            <div>
                <h1 type="button" onMouseOver={this.incrementCount}>
                    Hover {count} times
                </h1>
            </div>
        );
    }
}