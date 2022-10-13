import { useState } from "react";
import Callback from "./components/CallBack/Callback";


function App() {
  
  const [show, setShow] =useState(true);

  return (
    <div className="app">
        <Callback />
      </div>
  );
}

export default App;
