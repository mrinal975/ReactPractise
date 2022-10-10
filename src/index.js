import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));


class Clock extends React.Component {
  render(){ 
    return (
      <h1 className='heading'>
        <span> Hello World {new Date().toLocaleTimeString()}</span>
      </h1>
    );
  }  
}

const ClockComponent =  new Clock();
root.render(<Clock/>);

reportWebVitals();

// ReactDOM.render(element, document.getElementById('root'))