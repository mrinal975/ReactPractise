// import ClockList from "./components/ClockList";
import UseRef from "./components/Hook/UseRef";
function App() {
  
  // const [show, setShow] =useState(true);

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
      {/*<div>
         {show && <UseEffectHook/>}
        <p>
          <button type="button" onClick={(e)=>setShow((prevShow=>!prevShow))}>
            {show ? 'Hide post' : 'Show post'}
          </button>
        </p>
      </div> */}
      
      <UseRef></UseRef>
      </div>
  );
}

export default App;
