import React from "react";
class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
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

  render(){ 
    return (
      <h1 className='heading'>
        <span className="text"> Hello - {this.state.date.toLocaleTimeString(this.props.local)}</span>
      </h1>
    );
  }
}
export default Clock;