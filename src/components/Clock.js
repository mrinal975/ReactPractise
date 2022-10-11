import React from "react";
import Button from "./Button";
class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date(), local:'bn-BD'};
  }

  componentDidMount() {
    setInterval(()=>this.tick(),1000)
  }

  componentWillUnmount() {
    clearInterval(this.state);
  }
  
  tick() {
    this.setState((state, props) => ({
      date: new Date()
    }));
  }

  handleClick = (local)=>{
    this.setState((state, props)=>({
      local
    }));
  }

  render(){ 
    
    const {date, local} = this.state;
    return (
      <div>
        <h1 className='heading'>
          <span className="text"> {date.toLocaleTimeString(local)}</span>
        </h1>
        {local==='bn-BD'?
        (<Button type="button" change={this.handleClick} local="en-US" show = {false}>
          click here
        </Button>)
        :
        (<Button type="button" change={this.handleClick} local="bn-BD" show enable ={false}>
          click here
        </Button>)}
      
      </div>
    );
  }
}
export default Clock;