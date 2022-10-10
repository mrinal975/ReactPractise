import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));


function Clock({local}){
  return (
    <h1 className='heading'>
      <span> Hello World {new Date().toLocaleTimeString(local)}</span>
    </h1>
  );
}

root.render(
  <Clock local="bn-BD"/>
)

reportWebVitals();

// ReactDOM.render(element, document.getElementById('root'))