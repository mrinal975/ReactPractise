// import ClockList from "./components/ClockList";
// import Form from "./components/Form";
// import Calculator from "./components/Calculator";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// const quantities = [1,2,3];

// import RenderPropsWithCounter from "./components/HOC/RenderPropsWithCounter";
// import RenderPropsClickCounter from "./components/RenderPropsClickCounter";
// import RenderPropsHoverCounter from "./components/RenderPropsHoverCounter";
// import RenderPropsHoverCounter from "./components/RenderPropsHoverCounter";
// import Todo from "./components/Todo";
import { useState } from "react";
import UseEffectHook from "./components/UseEffectHook";
function App() {
  
  const [show, setShow] =useState(true);

  return (
    <div className="app">
      {/* <ClockList quantities={quantities}/> */}
      {/* <Form></Form> */}
      {/* <Calculator></Calculator> */}
      {/* <ClickCounter/>*/}
      {/* <HoverCounter/> */}

      {/* <RenderPropsWithCounter>
        {(counter,incrementCount )=>(
          <RenderPropsClickCounter count={counter} incrementCount = {incrementCount}/>
        )}
      </RenderPropsWithCounter>
      <RenderPropsWithCounter>
        {(counter, incrementCount)=>(
          <RenderPropsHoverCounter count={counter} incrementCount = {incrementCount}/>
        )}
      </RenderPropsWithCounter> */}
      {/* <Todo/> */}
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
