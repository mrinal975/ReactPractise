import React, { Component } from "react";

class Counter extends Component{

    state = {
        count:0,
        imageUrl:'https://img.freepik.com/premium-photo/cut-view-hot-sexy-couple-window-bed-room-strong-guy-hold-woman-red-lingerie-himself-she-sit-embrace-guy-with-legs_152404-11257.jpg'
    };

    render(){
        return (<React.Fragment>
            <span className="badge badge-primary m-2">{this.formatCounter()}</span>
            <button>Increment</button>
            </React.Fragment>
        );
    }
    
     formatCounter(){
        const {count} = this.state;
    
        return count==0?'Zero':count;
    }
}


export default Counter;