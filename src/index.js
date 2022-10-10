import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));


function Clock(){
  return (
    <h1 className='heading'>
      <span> Hello World {new Date().toLocaleTimeString()}</span>
    </h1>
  );
}

root.render(Clock())

reportWebVitals();

// ReactDOM.render(element, document.getElementById('root'))