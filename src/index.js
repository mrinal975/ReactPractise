import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


const element = (
  <h1 className='heading'>
    <span> Hello World {new Date().toLocaleDateString()}</span>
  </h1>
);

root.render(element);
reportWebVitals();

// ReactDOM.render(element, document.getElementById('root'))