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
                <button type="button" onMouseOver={this.incrementCount}>
                    Hover {count} times
                </button>
            </div>
        );
    }
}
export default WithCounter(HoverCounter);