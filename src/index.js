import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));


class Clock extends React.Component {
  render(){ 
    return (
      <h1 className='heading'>
        <span> Hello - {this.props.children} {new Date().toLocaleTimeString(this.props.local)}</span>
      </h1>
    );
  }  
}

const ClockComponent =  new Clock();
root.render(<Clock local="bn-BD">test</Clock>);

reportWebVitals();

// ReactDOM.render(element, document.getElementById('root'))