import React from "react";
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
      local:local
    }));
    console.log('the button was clinked');

  }

  render(){ 
    
    const {date, local} = this.state;

    return (
      <div>
        <h1 className='heading'>
          <span className="text"> Hello - {date.toLocaleTimeString(local)}</span>
        </h1>
        <button type="button" onClick={this.handleClick('en-US')}>
          click here
        </button>
      </div>
    );
  }
}
export default Clock;