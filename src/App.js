import { useState } from "react";
import UseEffectHook from "./components/UseEffectHook";

function App() {
  const [show, setShow] =useState(true);

  return (
    <div className="app">
      <div>
        {show && <UseEffectHook/>}
        <p>
          <button type="button" onClick={(e)=>setShow((prevShow=>!prevShow))}>
          {show ? 'Hide post' : 'Show post'}
          </button>
        </p>
      </div> 
    </div>
  );
}

export default App;
