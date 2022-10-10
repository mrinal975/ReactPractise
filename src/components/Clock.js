import React from "react";
class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
  componentDidMount() {
  }

  componentWillUnmount() {
  }
  
  tick() {
    this.setState((state, props) => ({
        counter: new Date()
      }));
  }
  render(){ 
    return (
      <h1 className='heading'>
        <span> Hello - {this.props.children} {new Date().toLocaleTimeString(this.props.local)}</span>
      </h1>
    );
  } 
}
export default Clock;