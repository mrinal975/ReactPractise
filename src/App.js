// import ClockList from "./components/ClockList";
// import Form from "./components/Form";
// import Calculator from "./components/Calculator";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// const quantities = [1,2,3];

import RenderPropsWithCounter from "./components/HOC/RenderPropsWithCounter";
import RenderPropsClickCounter from "./components/RenderPropsClickCounter";
import RenderPropsHoverCounter from "./components/RenderPropsHoverCounter";
// import RenderPropsHoverCounter from "./components/RenderPropsHoverCounter";

function App() {
  return (
    <div className="app">
      {/* <ClockList quantities={quantities}/> */}
      {/* <Form></Form> */}
      {/* <Calculator></Calculator> */}
      {/* <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter> */}
      {/* <RenderPropsClickCounter />
      <RenderPropsHoverCounter /> */}

      <RenderPropsWithCounter>
        {(counter,incrementCount )=>(
          <RenderPropsClickCounter count={counter} incrementCount = {incrementCount}/>
        )}
      </RenderPropsWithCounter>
      <RenderPropsWithCounter>
        {(counter, incrementCount)=>(
          <RenderPropsHoverCounter count={counter} incrementCount = {incrementCount}/>
        )}
      </RenderPropsWithCounter>
      </div>
  );
}

export default App;
